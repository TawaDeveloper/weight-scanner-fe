/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type execSettlementJobBody = string;
export type execSettlementJobOptions = Record<string, any>;

export type execSettlementJobResponse = Promise<defs.finance.Response<boolean>>;

/**
 * @desc 执行结算任务 settlement Job
 */
export function request(
  body: execSettlementJobBody,
  options?: execSettlementJobOptions,
): execSettlementJobResponse {
  const host = getEnvHost();
  const url = host + '/finance/bo/util/exec/settlementJob';
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
