/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type pageQueryUsersBody = defs.account.UserPageQueryDTO;
export type pageQueryUsersOptions = Record<string, any>;

export type pageQueryUsersResponse = Promise<
  defs.account.Response<defs.account.PageInfo<defs.account.UserVO>>
>;

/**
 * @desc 分页查询用户
 */
export function request(
  body: pageQueryUsersBody,
  options?: pageQueryUsersOptions,
): pageQueryUsersResponse {
  const host = getEnvHost();
  const url = host + '/account/bo/user/page';
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
