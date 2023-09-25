/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type updateMemberLevelBody = defs.account.MemberLevelCommandDTO;
export type updateMemberLevelPath = {
  /** id */
  id: number;
};
export type updateMemberLevelOptions = Record<string, any>;

export type updateMemberLevelResponse = Promise<defs.account.Response<string>>;

/**
 * @desc 更新会员等级
 */
export function request(
  body: updateMemberLevelBody,
  path: updateMemberLevelPath,
  options?: updateMemberLevelOptions,
): updateMemberLevelResponse {
  const host = getEnvHost();
  const url =
    host +
    '/account/bo/member/level/update/{id}'.replace(
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
