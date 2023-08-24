/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type updateCycleStatusParam = {
  /** id */
  id: number;

  /** status */
  status: 'ENABLE' | 'DISABLE';
};
export type updateCycleStatusOptions = Record<string, any>;

export type updateCycleStatusResponse = Promise<defs.finance.Response<void>>;

/**
 * @desc 更新结算周期规则状态
 */
export function request(
  params: updateCycleStatusParam,
  options?: updateCycleStatusOptions,
): updateCycleStatusResponse {
  const host = getEnvHost();
  const url = host + '/finance/bo/settlementCfg/cycle/updateStatus';
  const fetchOption = {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
    },
    params,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
