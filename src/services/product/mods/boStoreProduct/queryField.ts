/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type queryFieldOptions = Record<string, any>;

export type queryFieldResponse = Promise<
  defs.product.Response<Array<defs.product.StoreProductField>>
>;

/**
 * @desc 查询列表显示字段
 */
export function request(options?: queryFieldOptions): queryFieldResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/storeProduct/query/field';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
