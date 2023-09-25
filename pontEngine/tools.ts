import { Interface, Surrounding } from 'pont-engine';

export type ParamType =
  | 'params'
  | 'body'
  | 'formData'
  | 'path'
  | 'headers'
  | 'options';
const parameterTypes = [
  'params',
  'body',
  'formData',
  'path',
  // "headers",
  'options',
];
export type ParameterType = {
  name: string;
  type: ParamType;
  dataType: string;
  require: boolean;
  typeName?: string;
};

export class Parameters {
  params?: ParameterType;

  body?: ParameterType;

  formData?: ParameterType;

  path?: ParameterType;

  headers?: ParameterType;

  options?: ParameterType;

  consumes: string[];

  method: string;

  constructor(inter: Interface) {
    const { parameters, name, method, consumes } = inter;
    this.method = method;
    this.consumes = consumes;
    const paramsParam = parameters.filter((param) => param.in === 'query');
    const bodyParam = parameters.find((param) => param.in === 'body');
    // const headerParam = parameters.filter((param) => param.in === 'header');
    const formData = parameters.find((param) => param.in === 'formData');
    const pathParam = parameters.find((param) => param.in === 'path');
    if (paramsParam.length) {
      this.params = {
        name: `${name}Param`,
        type: 'params',
        require: true,
        dataType: `{
          ${paramsParam
            .map(
              (param) =>
                `${param.toPropertyCode(Surrounding.typeScript, true)}`,
            )
            .join('\n')}
        }`,
      };
    }
    if (bodyParam) {
      this.body = {
        name: `${name}Body`,
        type: 'body',
        require: true,
        dataType: `${inter.getBodyParamsCode()}`,
      };
    }
    if (formData) {
      this.formData = {
        name: `${name}FormData`,
        type: 'formData',
        require: true,
        dataType: 'FormData',
      };
    }
    // if (headerParam.length) {
    //   const required = headerParam.filter((i) => i.required);
    //   this.headers = {
    //     name: `${name}Headers`,
    //     type: "headers",
    //     require: !!required.length,
    //     dataType: `
    //     {
    //       ${headerParam
    //         .map(
    //           (param) => `${param.toPropertyCode(Surrounding.typeScript, true)}`
    //         )
    //         .join("\n")}
    //     }`,
    //   };
    // }
    if (pathParam) {
      this.path = {
        name: `${name}Path`,
        type: 'path',
        require: true,
        typeName: pathParam.name,
        dataType: `{
          ${pathParam.toPropertyCode(Surrounding.typeScript, true)}
        }`,
      };
    }

    this.options = {
      name: `${name}Options`,
      type: 'options',
      require: false,
      dataType: 'Record<string,any>',
    };
  }

  getParameterList() {
    const required: ParameterType[] = [];
    const noRequired: ParameterType[] = [];
    parameterTypes.forEach((key) => {
      const parameter: ParameterType = this[key];
      if (!parameter) {
        return;
      }
      if (parameter.require) {
        required.push(parameter);
      } else {
        noRequired.push(parameter);
      }
    });
    return [...required, ...noRequired];
  }

  getArgs() {
    const parameters = this.getParameterList();
    return parameters
      .map((parameter) => {
        return `${parameter.type}${parameter.require ? '' : '?'}:${
          parameter.name
        }`;
      })
      .join(',');
  }

  getRequestParams() {
    const contentType = this.consumes?.length
      ? this.consumes[0]
      : 'application/json';
    const handleBody = () => {
      if (this.body) {
        return 'data:body,\n';
      }
      return this.formData ? 'data:formData,\n' : '';
    };
    const config = `${this.params ? 'params,\n' : ''}${handleBody()}...options`;
    const header = this.headers ? `...headers,\n` : '';
    return `{
              method: "${this.method}",
              headers: {
                "Content-Type": "${contentType}",${header}
              },
              ${config}
          }`;
  }

  getTypes() {
    const parameters = this.getParameterList();
    return parameters
      .map((parameter) => {
        return `export type ${parameter.name} = ${parameter.dataType}`;
      })
      .join(';\n');
  }
}
