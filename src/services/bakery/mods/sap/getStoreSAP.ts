/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getStoreSAPOptions = Record<string, any>;

export type getStoreSAPResponse = Promise<ObjectMap<any, object>>;

/**
 * @desc 获取store data
 */
export function request(options?: getStoreSAPOptions): getStoreSAPResponse {
  const host = getEnvHost();
  const url = host + '/bakery/hot-deli-bakery/sap/get_store';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
