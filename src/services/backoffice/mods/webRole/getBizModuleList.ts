/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getBizModuleListParam = {
  /** roleId */
  roleId: number;
};
export type getBizModuleListOptions = Record<string, any>;

export type getBizModuleListResponse = Promise<
  defs.backoffice.Response<Array<defs.backoffice.ModuleAndField>>
>;

/**
 * @desc 数据权限 - 查询角色业务
 */
export function request(
  params: getBizModuleListParam,
  options?: getBizModuleListOptions,
): getBizModuleListResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/bo/role/permission/data/bizModule/list';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    params,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
