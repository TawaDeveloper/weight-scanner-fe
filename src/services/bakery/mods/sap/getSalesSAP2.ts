/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getSalesSAP2Options = Record<string, any>;

export type getSalesSAP2Response = Promise<ObjectMap<any, object>>;

/**
 * @desc 获取sales data
 */
export function request(options?: getSalesSAP2Options): getSalesSAP2Response {
  const host = getEnvHost();
  const url = host + '/hot-deli-bakery/sap/get_sales2';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
