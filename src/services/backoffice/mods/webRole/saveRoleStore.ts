/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type saveRoleStoreBody = defs.backoffice.RoleStoreDTO;
export type saveRoleStoreOptions = Record<string, any>;

export type saveRoleStoreResponse = Promise<defs.backoffice.Response>;

/**
 * @desc 数据权限 - 保存角色门店
 */
export function request(
  body: saveRoleStoreBody,
  options?: saveRoleStoreOptions,
): saveRoleStoreResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/bo/role/permission/data/store/save';
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
