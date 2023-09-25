/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type listSettlementCycleOptions = Record<string, any>;

export type listSettlementCycleResponse = Promise<
  defs.finance.Response<Array<defs.finance.SettlementCycleCfgDto>>
>;

/**
 * @desc 结算周期列表查询
 */
export function request(
  options?: listSettlementCycleOptions,
): listSettlementCycleResponse {
  const host = getEnvHost();
  const url = host + '/finance/bo/settlementCfg/cycle/list';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
