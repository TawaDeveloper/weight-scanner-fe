/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type findAllOptions = Record<string, any>;

export type findAllResponse = Promise<
  defs.product.Response<Array<defs.product.Policy>>
>;

/**
 * @desc 查询所有声明
 */
export function request(options?: findAllOptions): findAllResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/product/policy/all';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
