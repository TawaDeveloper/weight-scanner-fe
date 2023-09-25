/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type listPointsRulesPath = {
  /** id */
  id: number;
};
export type listPointsRulesOptions = Record<string, any>;

export type listPointsRulesResponse = Promise<
  defs.account.Response<Array<defs.account.PointsRulesVO>>
>;

/**
 * @desc 查询会员等级对应的积分规则
 */
export function request(
  path: listPointsRulesPath,
  options?: listPointsRulesOptions,
): listPointsRulesResponse {
  const host = getEnvHost();
  const url =
    host +
    '/account/bo/member/level/list/points-rules/{id}'.replace(
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
