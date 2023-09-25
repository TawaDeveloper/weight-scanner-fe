/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getWarehouseOptionsOptions = Record<string, any>;

export type getWarehouseOptionsResponse = Promise<
  defs.backoffice.Response<Array<defs.backoffice.Option>>
>;

/**
 * @desc 数据权限 - 查询仓库列表（选项）
 */
export function request(
  options?: getWarehouseOptionsOptions,
): getWarehouseOptionsResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/bo/role/permission/data/warehouse/options';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
