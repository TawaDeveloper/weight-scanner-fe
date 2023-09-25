/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type saveRoleBizModuleBody = defs.backoffice.ModuleAndFieldDTO;
export type saveRoleBizModuleOptions = Record<string, any>;

export type saveRoleBizModuleResponse = Promise<defs.backoffice.Response>;

/**
 * @desc 数据权限 - 保存角色业务
 */
export function request(
  body: saveRoleBizModuleBody,
  options?: saveRoleBizModuleOptions,
): saveRoleBizModuleResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/bo/role/permission/data/bizModule/save';
  const fetchOption = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
