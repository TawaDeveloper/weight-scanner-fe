/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type settlementBody = defs.finance.SettlementRequest;
export type settlementOptions = Record<string, any>;

export type settlementResponse = Promise<defs.finance.Response<void>>;

/**
 * @desc 创建结算单
 */
export function request(
  body: settlementBody,
  options?: settlementOptions,
): settlementResponse {
  const host = getEnvHost();
  const url = host + '/finance/bo/settlementTasks/settlement';
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
