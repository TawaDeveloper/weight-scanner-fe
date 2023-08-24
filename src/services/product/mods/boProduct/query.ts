/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type queryParam = {
  /** id */
  id: number;
};
export type queryOptions = Record<string, any>;

export type queryResponse = Promise<defs.product.Response<defs.product.Policy>>;

/**
 * @desc 查询声明
 */
export function request(
  params: queryParam,
  options?: queryOptions,
): queryResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/product/policy/query';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    params,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
