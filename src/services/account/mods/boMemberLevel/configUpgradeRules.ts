/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type configUpgradeRulesBody = defs.account.UpgradeRulesCommandDTO;
export type configUpgradeRulesPath = {
  /** id */
  id: number;
};
export type configUpgradeRulesOptions = Record<string, any>;

export type configUpgradeRulesResponse = Promise<defs.account.Response<string>>;

/**
 * @desc 配置会员等级对应的升级规则
 */
export function request(
  body: configUpgradeRulesBody,
  path: configUpgradeRulesPath,
  options?: configUpgradeRulesOptions,
): configUpgradeRulesResponse {
  const host = getEnvHost();
  const url =
    host +
    '/account/bo/member/level/config/upgrade-rules/{id}'.replace(
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
