/* eslint-disable max-classes-per-file */
/* eslint-disable class-methods-use-this */
import {
  BaseClass,
  Interface,
  Surrounding,
  CodeGenerator,
  FileStructures as originFileStructures,
} from 'pont-engine';

import { Parameters } from './tools';

export default class MyGenerator extends CodeGenerator {
  getBaseClassInDeclaration(base: BaseClass) {
    if (base.templateArgs && base.templateArgs.length) {
      return `class ${base.name}<${base.templateArgs
        .map((_, index) => `T${index} = any`)
        .join(', ')}> {
      ${base.properties
        .map((prop) => {
          const index = base.templateArgs.findIndex(
            (ele) => ele.typeName === prop.dataType.typeName,
          );
          const optionalSignal = prop.required ? '' : '?';
          if (index !== -1) {
            // 复写这个部分
            // 直接判断是否相等 相等然后找到匹配的泛型，放进去
            const fieldTypeDeclaration = `${optionalSignal}: T${index}`;
            return `
            /** ${prop.description || prop.name} */
            ${prop.name}${fieldTypeDeclaration};`;
          }
          // 等于-1可能是array套嵌
          const deepArgs = function (deepProp) {
            const index = base.templateArgs.findIndex(
              (ele) => ele.typeName === deepProp.typeName,
            );
            if (index !== -1) {
              return `Array<T${index}>`;
            }
            if (deepProp.typeName === 'Array') {
              const len = deepProp.typeArgs.length;
              for (let i = 0; i < len; i++) {
                const arg = deepProp.typeArgs[i];
                const result = deepArgs(arg);
                if (result) {
                  return result;
                }
              }
            }
            return false;
          };
          if (prop.dataType.typeName === 'Array') {
            const len = prop.dataType.typeArgs.length;
            for (let i = 0; i < len; i++) {
              const arg = prop.dataType.typeArgs[i];
              const result = deepArgs(arg);
              if (result) {
                return `
                /** ${prop.description || prop.name} */
                ${prop.name}${optionalSignal}: ${result};`;
              }
            }
          }
          return prop.toPropertyCode(Surrounding.typeScript, true);
        })
        .join('\n')}
    }
    `;
    }
    return `class ${base.name} {
      ${base.properties
        .map((prop) => prop.toPropertyCode(Surrounding.typeScript, true))
        .join('\n')}
    }
  `;
  }

  /** 获取接口内容的类型定义代码 */
  getInterfaceContentInDeclaration(inter: Interface) {
    const { name, responseType } = inter;
    const parameters = new Parameters(inter);
    const responseName = `${name}Response`;

    return `
      ${parameters.getTypes()}
      export type ${responseName} = ${responseType}
      export type request = (${parameters.getArgs()})=> ${responseName};
    `;
  }

  /** 获取接口实现内容的代码 */
  getInterfaceContent(inter: Interface) {
    const { name, responseType, path } = inter;
    const parameters = new Parameters(inter);
    const responseName = `${name}Response`;
    return `
      /// <reference path="../../api.d.ts" />
      import sendRequest,{ getEnvHost } from "@/utils/request";

      ${parameters.getTypes()}

      export type ${responseName} = Promise<${responseType}>

      /**
       * @desc ${inter.description}
       */
      export function request(${parameters.getArgs()}) :${responseName}{
        const host = getEnvHost()
        const url = host+'/${this.dataSource.name}${path}'${
      parameters.path
        ? `.replace(/\\{[\\w]+\\}/,String(path.${parameters.path.typeName}));`
        : ''
    }
        const fetchOption = ${parameters.getRequestParams()}

        return sendRequest(url,fetchOption);
      }
    `;
  }

  /** 获取所有模块的 index 入口文件 */
  getModsIndex() {
    let conclusion = `
        export const API = {
          ${this.dataSource.mods.map((mod) => mod.name).join(', \n')}
        };
      `;

    // dataSource name means multiple dataSource
    if (this.dataSource.name) {
      conclusion = `
          export const ${this.dataSource.name} = {
            ${this.dataSource.mods
              .map((mod) => `${mod.name}:${mod.name}Interface`)
              .join(', \n')}
          };
        `;
    }

    return `
        ${this.dataSource.mods
          .map(
            (mod) => `import * as ${mod.name}Interface from "./${mod.name}";`,
          )
          .join('\n')}
        ${conclusion}
      `;
  }

  /** 获取接口类和基类的总的 index 入口文件代码 */
  getIndex() {
    let conclusion = `
      export * from "./mods/index";
      export * as defs from "./baseClass";
    `;

    // dataSource name means multiple dataSource
    if (this.dataSource.name) {
      conclusion = `
        export { ${this.dataSource.name} } from "./mods/index";
        export * as defs from "./baseClass";
      `;
    }

    return conclusion;
  }
}

export class FileStructures extends originFileStructures {
  getDataSourcesTs() {
    const dsNames = super.getMultipleOriginsDataSourceName();

    return `
      ${dsNames
        .map((name) => `import { ${name} } from './${name}';`)
        .join('\n')}

      ${dsNames.map((name) => `export const ${name}API=${name};`).join('\n')}

      export default  {
        ${dsNames.join(',\n')}
      };
    `;
  }
}
