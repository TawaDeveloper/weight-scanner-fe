/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getWarehouseIdsParam = {
  /** roleId */
  roleId: number;
};
export type getWarehouseIdsOptions = Record<string, any>;

export type getWarehouseIdsResponse = Promise<
  defs.backoffice.Response<Array<number>>
>;

/**
 * @desc 数据权限 - 查询角色仓库
 */
export function request(
  params: getWarehouseIdsParam,
  options?: getWarehouseIdsOptions,
): getWarehouseIdsResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/bo/role/permission/data/warehouse/list';
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
