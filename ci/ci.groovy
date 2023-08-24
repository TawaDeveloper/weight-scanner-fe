pipeline {
    agent any

    environment {
        MODULE = "${params.MODULE}"        
        K8S = "${params.K8S}"
        ACTIVE_PROFILE = "${params.ACTIVE_PROFILE}"
        BUILD_PARAM = "${params.BUILD_PARAM}"

    }



    stages {   

        stage('Building Project for Dev') {
          steps {
               script {
                    nodejs("NodeJS"){
                        sh "yarn install"
                        sh "yarn build:${env.BUILD_PARAM}"
                    }
               }
          }
        }   

        stage('Build Docker Image') {
            steps {
                script {
                    def branch_name = "${env.BRANCH_NAME}".replaceAll("/", "-")
                    def version = "v${env.BUILD_NUMBER}-${branch_name}"
                    def docker_name = "${MODULE}:${version}"
                    sh "docker build  -f ./Dockerfile -t ${docker_name} ."
                    sh "docker tag ${docker_name} 847825268283.dkr.ecr.us-west-1.amazonaws.com/${docker_name}"
                    env.DOCKER_NAME = "847825268283.dkr.ecr.us-west-1.amazonaws.com/${docker_name}"
                    env.LOCAL_DOCKER_NAME = "${docker_name}" 
                }
            }
        }

        stage('Push to ECR') {
            steps {
                script {
                    docker.withRegistry("https://847825268283.dkr.ecr.us-west-1.amazonaws.com", "ecr:us-west-1:65792f65-5335-457f-b3db-f1a7de9d258e") {
                        docker.image("${DOCKER_NAME}").push()
                    }
                }
            }
        }

        stage('Create Service') {
            steps {
                script {

                    withCredentials([[
                                             $class       : 'AmazonWebServicesCredentialsBinding',
                                             credentialsId: '65792f65-5335-457f-b3db-f1a7de9d258e',
                                     ]]) {

                        if (env.MODULE == null) {
                            error("请确保环境变量'MODULE'已被设置。")
                        }
                        sh "aws eks update-kubeconfig --region us-west-1 --name ${K8S}"

                        def servicenotExists = sh(
                                returnStdout: true,
                                script: "kubectl get svc ${MODULE}-service -n tawa --ignore-not-found"
                        ).trim().isEmpty()

                        echo "servicenotExists: ${servicenotExists}"
                        sh "sed -i 's#{{MODULE}}#${env.MODULE}#g' ./ci/service.yaml"
                        if (servicenotExists) {
                            sh 'kubectl apply -f ./ci/service.yaml'
                        }
                    }
                }
            }
        }


        stage('Deploy to EKS') {
            steps {
                script {
                    withCredentials([[
                                             $class       : 'AmazonWebServicesCredentialsBinding',
                                             credentialsId: '65792f65-5335-457f-b3db-f1a7de9d258e',
                                     ]]) {
                        sh "aws eks update-kubeconfig --region us-west-1 --name ${K8S}"
                        sh "sed -i 's#{{MODULE}}#${MODULE}#g' ./ci/deployment.yaml"
                        sh "sed -i 's#{{IMAGE_NAME}}#${DOCKER_NAME}#g' ./ci/deployment.yaml"
                        sh "cat ./ci/deployment.yaml"
                        sh 'kubectl apply -f ./ci/deployment.yaml'
                    }
                }
            }
        }

        stage('Delete Local Image') {
            steps {
                script {
                    sh "docker rmi ${DOCKER_NAME}"
                    sh "docker rmi ${LOCAL_DOCKER_NAME}"
                }
            }
        }
    }
    
        
    
}
