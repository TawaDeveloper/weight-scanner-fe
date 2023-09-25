/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type saveRoleWarehouseBody = defs.backoffice.RoleWarehouseDTO;
export type saveRoleWarehouseOptions = Record<string, any>;

export type saveRoleWarehouseResponse = Promise<defs.backoffice.Response>;

/**
 * @desc 数据权限 - 保存角色仓库
 */
export function request(
  body: saveRoleWarehouseBody,
  options?: saveRoleWarehouseOptions,
): saveRoleWarehouseResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/bo/role/permission/data/warehouse/save';
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
