/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type queryAllDefaultPointsRulesOptions = Record<string, any>;

export type queryAllDefaultPointsRulesResponse = Promise<
  defs.account.Response<Array<defs.account.DefaultPointsRulesVO>>
>;

/**
 * @desc 查询所有的默认积分规则
 */
export function request(
  options?: queryAllDefaultPointsRulesOptions,
): queryAllDefaultPointsRulesResponse {
  const host = getEnvHost();
  const url = host + '/account/bo/points/rules/list';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
