#！/bin/bash

# 拉取代码、编译打包
sudo rm -rf ~/tawa-devops/dev/bo-mall-platform/bo-mall-platform

cd ~/tawa-devops/dev/bo-mall-platform

git clone -b feature/develop git@github.com:TawaDeveloper/bo-mall-platform.git

ret=$?
if [ $ret -ne 0 ];then
  echo "git clone bo-mall-platform failed"
  exit $ret
else
  echo "git clone bo-mall-platform success"
fi

cd bo-mall-platform

yarn

ret=$?
if [ $ret -ne 0 ];then
  echo "yarn install packages failed"
  exit $ret
else
  echo "yarn install packages success"
fi

sudo rm -rf ~/tawa-devops/dev/bo-mall-platform/build

yarn build

ret=$?
if [ $ret -ne 0 ];then
  echo "build failed"
  exit $ret
else
  echo "build success"
fi

cp -r ~/tawa-devops/dev/bo-mall-platform/bo-mall-platform/build ~/tawa-devops/dev/bo-mall-platform

# 开始部署

cd ~/tawa-devops/dev/bo-mall-platform

sudo docker stop tawa-bo-mall-platform

ret=$?
if [ $ret -ne 0 ];then
  echo "docker stop failed [container: bo-mall-platform]"
else
  echo "docker stop success [container: bo-mall-platform]"
fi

sudo docker rm tawa-bo-mall-platform

ret=$?
if [ $ret -ne 0 ];then
  echo "docker rm failed [container: bo-mall-platform]"
else
  echo "docker rm container success [container: bo-mall-platform]"
fi

sudo docker rmi tawa-bo-mall-platform

ret=$?
if [ $ret -ne 0 ];then
  echo "docker rmi image failed [image: bo-mall-platform]"
else
  echo "docker rmi image success [image: bo-mall-platform]"
fi

sudo docker build -t tawa-bo-mall-platform .

ret=$?
if [ $ret -ne 0 ];then
  echo "docker build image failed [image: bo-mall-platform]"
  exit $ret
else
  echo "docker build image success [image: bo-mall-platform]"
fi

sudo docker run -d --name tawa-bo-mall-platform -p 8082:80 tawa-bo-mall-platform

ret=$?
if [ $ret -ne 0 ];then
  echo "docker run container failed [container: bo-mall-platform]"
  exit $ret
else
  echo "docker run container success [container: bo-mall-platform]"
fi

sudo rm -rf ~/tawa-devops/dev/bo-mall-platform/bo-mall-platform

sudo rm -rf ~/tawa-devops/dev/bo-mall-platform/build

sudo docker logs -f -t --since="2022-01-01" --tail=10 tawa-bo-mall-platform
