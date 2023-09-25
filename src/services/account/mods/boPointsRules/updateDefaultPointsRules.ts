/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type updateDefaultPointsRulesBody =
  defs.account.DefaultPointsRulesCommandDTO;
export type updateDefaultPointsRulesPath = {
  /** id */
  id: number;
};
export type updateDefaultPointsRulesOptions = Record<string, any>;

export type updateDefaultPointsRulesResponse = Promise<
  defs.account.Response<string>
>;

/**
 * @desc 更新默认的积分规则
 */
export function request(
  body: updateDefaultPointsRulesBody,
  path: updateDefaultPointsRulesPath,
  options?: updateDefaultPointsRulesOptions,
): updateDefaultPointsRulesResponse {
  const host = getEnvHost();
  const url =
    host +
    '/account/bo/points/rules/update/{id}'.replace(
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
