/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type createCycleBody = defs.finance.SettlementCycleCfgDto;
export type createCycleOptions = Record<string, any>;

export type createCycleResponse = Promise<defs.finance.Response<number>>;

/**
 * @desc 新增结算周期规则
 */
export function request(
  body: createCycleBody,
  options?: createCycleOptions,
): createCycleResponse {
  const host = getEnvHost();
  const url = host + '/finance/bo/settlementCfg/cycle/create';
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
