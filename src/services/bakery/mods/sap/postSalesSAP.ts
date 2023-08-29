/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type postSalesSAPOptions = Record<string, any>;

export type postSalesSAPResponse = Promise<boolean>;

/**
 * @desc postSalesSAP
 */
export function request(options?: postSalesSAPOptions): postSalesSAPResponse {
  const host = getEnvHost();
  const url = host + '/bakery/hot-deli-bakery/sap/post_sales';
  const fetchOption = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
