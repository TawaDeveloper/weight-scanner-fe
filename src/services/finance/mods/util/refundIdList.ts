/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type refundIdListBody = Array<string>;
export type refundIdListOptions = Record<string, any>;

export type refundIdListResponse = Promise<defs.finance.Response<string>>;

/**
 * @desc 同步逆向订单数据到财务系统
 */
export function request(
  body: refundIdListBody,
  options?: refundIdListOptions,
): refundIdListResponse {
  const host = getEnvHost();
  const url = host + '/finance/bo/util/sync/refund2finance';
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
