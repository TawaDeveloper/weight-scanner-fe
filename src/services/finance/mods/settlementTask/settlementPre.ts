/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type settlementPreBody = defs.finance.SettlementPreRequest;
export type settlementPreOptions = Record<string, any>;

export type settlementPreResponse = Promise<
  defs.finance.Response<Array<defs.finance.SettlementResponse>>
>;

/**
 * @desc 结算(结算单预览)
 */
export function request(
  body: settlementPreBody,
  options?: settlementPreOptions,
): settlementPreResponse {
  const host = getEnvHost();
  const url = host + '/finance/bo/settlementTasks/preview';
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
