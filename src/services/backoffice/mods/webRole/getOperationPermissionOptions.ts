/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getOperationPermissionOptionsParam = {
  /** appId */
  appId: number;
};
export type getOperationPermissionOptionsOptions = Record<string, any>;

export type getOperationPermissionOptionsResponse = Promise<
  defs.backoffice.Response<Array<defs.backoffice.PermissionTreeItem>>
>;

/**
 * @desc 操作权限 - 查询权限列表（选项）
 */
export function request(
  params: getOperationPermissionOptionsParam,
  options?: getOperationPermissionOptionsOptions,
): getOperationPermissionOptionsResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/bo/role/permission/operation/options';
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
