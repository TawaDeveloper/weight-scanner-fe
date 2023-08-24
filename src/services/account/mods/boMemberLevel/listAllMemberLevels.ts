/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type listAllMemberLevelsOptions = Record<string, any>;

export type listAllMemberLevelsResponse = Promise<
  defs.account.Response<Array<defs.account.MemberLevelVO>>
>;

/**
 * @desc 查询所有的会员等级
 */
export function request(
  options?: listAllMemberLevelsOptions,
): listAllMemberLevelsResponse {
  const host = getEnvHost();
  const url = host + '/account/bo/member/level/list';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
