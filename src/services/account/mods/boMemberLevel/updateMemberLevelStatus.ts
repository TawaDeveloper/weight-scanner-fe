/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type updateMemberLevelStatusPath = {
  /** id */
  id: number;
};
export type updateMemberLevelStatusOptions = Record<string, any>;

export type updateMemberLevelStatusResponse = Promise<
  defs.account.Response<string>
>;

/**
 * @desc 更新会员等级的状态
 */
export function request(
  path: updateMemberLevelStatusPath,
  options?: updateMemberLevelStatusOptions,
): updateMemberLevelStatusResponse {
  const host = getEnvHost();
  const url =
    host +
    '/account/bo/member/level/update/status/{id}/{status}'.replace(
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
