/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type disusePath = {
  /** settlementNo */
  settlementNo: string;
};
export type disuseOptions = Record<string, any>;

export type disuseResponse = Promise<defs.finance.Response<void>>;

/**
 * @desc 作废结算单
 */
export function request(
  path: disusePath,
  options?: disuseOptions,
): disuseResponse {
  const host = getEnvHost();
  const url =
    host +
    '/finance/bo/settlementOrders/disuse/{settlementNo}'.replace(
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
