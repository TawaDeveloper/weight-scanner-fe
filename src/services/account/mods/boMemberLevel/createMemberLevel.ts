/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type createMemberLevelBody = defs.account.MemberLevelCommandDTO;
export type createMemberLevelOptions = Record<string, any>;

export type createMemberLevelResponse = Promise<defs.account.Response<string>>;

/**
 * @desc 创建新的会员等级
 */
export function request(
  body: createMemberLevelBody,
  options?: createMemberLevelOptions,
): createMemberLevelResponse {
  const host = getEnvHost();
  const url = host + '/account/bo/member/level/create';
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
