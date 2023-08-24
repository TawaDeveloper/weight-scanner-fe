/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type findAllStoreOptions = Record<string, any>;

export type findAllStoreResponse = Promise<
  defs.store.Response<Array<defs.store.StoreResponse>>
>;

/**
 * @desc 查询所有门店
 */
export function request(options?: findAllStoreOptions): findAllStoreResponse {
  const host = getEnvHost();
  const url = host + '/store/bo/store/all';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
