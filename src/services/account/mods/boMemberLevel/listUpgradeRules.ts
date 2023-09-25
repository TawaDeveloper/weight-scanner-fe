/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type listUpgradeRulesPath = {
  /** id */
  id: number;
};
export type listUpgradeRulesOptions = Record<string, any>;

export type listUpgradeRulesResponse = Promise<
  defs.account.Response<Array<defs.account.UpgradeRulesVO>>
>;

/**
 * @desc 查询会员等级对应的升级规则
 */
export function request(
  path: listUpgradeRulesPath,
  options?: listUpgradeRulesOptions,
): listUpgradeRulesResponse {
  const host = getEnvHost();
  const url =
    host +
    '/account/bo/member/level/list/upgrade-rules/{id}'.replace(
      /\{[\w]+\}/,
      String(path.id),
    );
  const fetchOption = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
