/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type cancelPayPath = {
  /** settlementNo */
  settlementNo: string;
};
export type cancelPayOptions = Record<string, any>;

export type cancelPayResponse = Promise<defs.finance.Response<boolean>>;

/**
 * @desc 取消支付
 */
export function request(
  path: cancelPayPath,
  options?: cancelPayOptions,
): cancelPayResponse {
  const host = getEnvHost();
  const url =
    host +
    '/finance/bo/settlementOrders/cancelPay/{settlementNo}'.replace(
      /\{[\w]+\}/,
      String(path.settlementNo),
    );
  const fetchOption = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
