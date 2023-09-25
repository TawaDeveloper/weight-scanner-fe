/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type queryAllDefaultUpgradeRulesOptions = Record<string, any>;

export type queryAllDefaultUpgradeRulesResponse = Promise<
  defs.account.Response<Array<defs.account.DefaultUpgradeRulesVO>>
>;

/**
 * @desc 查询所有的默认的升级规则
 */
export function request(
  options?: queryAllDefaultUpgradeRulesOptions,
): queryAllDefaultUpgradeRulesResponse {
  const host = getEnvHost();
  const url = host + '/account/bo/upgrade/rules/list';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
