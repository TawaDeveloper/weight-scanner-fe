/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type payBody = Array<string>;
export type payOptions = Record<string, any>;

export type payResponse = Promise<defs.finance.Response<boolean>>;

/**
 * @desc 支付
 */
export function request(body: payBody, options?: payOptions): payResponse {
  const host = getEnvHost();
  const url = host + '/finance/bo/settlementOrders/pay';
  const fetchOption = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
