/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getSalesSAPOptions = Record<string, any>;

export type getSalesSAPResponse = Promise<ObjectMap<any, object>>;

/**
 * @desc 获取sales data
 */
export function request(options?: getSalesSAPOptions): getSalesSAPResponse {
  const host = getEnvHost();
  const url = host + '/bakery/hot-deli-bakery/sap/get_sales';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
