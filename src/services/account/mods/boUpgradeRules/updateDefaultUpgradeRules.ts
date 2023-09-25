/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type updateDefaultUpgradeRulesBody =
  defs.account.DefaultUpgradeRulesCommandDTO;
export type updateDefaultUpgradeRulesPath = {
  /** id */
  id: number;
};
export type updateDefaultUpgradeRulesOptions = Record<string, any>;

export type updateDefaultUpgradeRulesResponse = Promise<
  defs.account.Response<string>
>;

/**
 * @desc 更新默认的升级规则
 */
export function request(
  body: updateDefaultUpgradeRulesBody,
  path: updateDefaultUpgradeRulesPath,
  options?: updateDefaultUpgradeRulesOptions,
): updateDefaultUpgradeRulesResponse {
  const host = getEnvHost();
  const url =
    host +
    '/account/bo/upgrade/rules/update/{id}'.replace(
      /\{[\w]+\}/,
      String(path.id),
    );
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
