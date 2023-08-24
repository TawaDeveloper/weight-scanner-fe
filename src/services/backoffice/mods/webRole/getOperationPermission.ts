/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getOperationPermissionParam = {
  /** appId */
  appId: number;

  /** roleId */
  roleId: number;
};
export type getOperationPermissionOptions = Record<string, any>;

export type getOperationPermissionResponse = Promise<
  defs.backoffice.Response<Array<number>>
>;

/**
 * @desc 操作权限 - 查询角色权限
 */
export function request(
  params: getOperationPermissionParam,
  options?: getOperationPermissionOptions,
): getOperationPermissionResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/bo/role/permission/operation/query';
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
