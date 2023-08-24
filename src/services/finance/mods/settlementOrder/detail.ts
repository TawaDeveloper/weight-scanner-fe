/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type detailPath = {
  /** settlementNo */
  settlementNo: string;
};
export type detailOptions = Record<string, any>;

export type detailResponse = Promise<
  defs.finance.Response<defs.finance.GetSettlementOrderDetailResponse>
>;

/**
 * @desc 结算单详情
 */
export function request(
  path: detailPath,
  options?: detailOptions,
): detailResponse {
  const host = getEnvHost();
  const url =
    host +
    '/finance/bo/settlementOrders/detail/{settlementNo}'.replace(
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
