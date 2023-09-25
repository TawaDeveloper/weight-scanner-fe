/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type findStoreGroupAndNatureOptions = Record<string, any>;

export type findStoreGroupAndNatureResponse = Promise<
  defs.store.Response<defs.store.StoreGroupAndNature>
>;

/**
 * @desc 查询门店区域及范围
 */
export function request(
  options?: findStoreGroupAndNatureOptions,
): findStoreGroupAndNatureResponse {
  const host = getEnvHost();
  const url = host + '/store/bo/store/groupNature';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
