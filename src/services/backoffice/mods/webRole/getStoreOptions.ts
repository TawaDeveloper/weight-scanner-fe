/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getStoreOptionsOptions = Record<string, any>;

export type getStoreOptionsResponse = Promise<
  defs.backoffice.Response<Array<defs.backoffice.Option>>
>;

/**
 * @desc 数据权限 - 查询门店列表（选项）
 */
export function request(
  options?: getStoreOptionsOptions,
): getStoreOptionsResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/bo/role/permission/data/store/options';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
