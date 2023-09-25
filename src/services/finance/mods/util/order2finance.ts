/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type order2financeBody = Array<string>;
export type order2financeOptions = Record<string, any>;

export type order2financeResponse = Promise<defs.finance.Response<string>>;

/**
 * @desc 同步订单数据到财务系统
 */
export function request(
  body: order2financeBody,
  options?: order2financeOptions,
): order2financeResponse {
  const host = getEnvHost();
  const url = host + '/finance/bo/util/sync/order2finance';
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
