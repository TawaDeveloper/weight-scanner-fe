/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type preDisusePath = {
  /** settlementNo */
  settlementNo: string;
};
export type preDisuseOptions = Record<string, any>;

export type preDisuseResponse = Promise<
  defs.finance.Response<Array<defs.finance.SettlementTask>>
>;

/**
 * @desc 作废结算单预览
 */
export function request(
  path: preDisusePath,
  options?: preDisuseOptions,
): preDisuseResponse {
  const host = getEnvHost();
  const url =
    host +
    '/finance/bo/settlementOrders/preDisuse/{settlementNo}'.replace(
      /\{[\w]+\}/,
      String(path.settlementNo),
    );
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
