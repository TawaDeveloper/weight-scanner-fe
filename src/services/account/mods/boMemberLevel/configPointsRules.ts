/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type configPointsRulesBody = Array<defs.account.PointsRulesDTO>;
export type configPointsRulesPath = {
  /** id */
  id: number;
};
export type configPointsRulesOptions = Record<string, any>;

export type configPointsRulesResponse = Promise<defs.account.Response<string>>;

/**
 * @desc 配置会员等级对应的积分规则
 */
export function request(
  body: configPointsRulesBody,
  path: configPointsRulesPath,
  options?: configPointsRulesOptions,
): configPointsRulesResponse {
  const host = getEnvHost();
  const url =
    host +
    '/account/bo/member/level/config/points-rules/{id}'.replace(
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
