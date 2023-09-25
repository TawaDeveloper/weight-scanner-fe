/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type pageQueryClosedUsersBody = defs.account.ClosedUserPageQueryDTO;
export type pageQueryClosedUsersOptions = Record<string, any>;

export type pageQueryClosedUsersResponse = Promise<
  defs.account.Response<defs.account.PageInfo<defs.account.ClosedUserVO>>
>;

/**
 * @desc 分页查询已注销的用户
 */
export function request(
  body: pageQueryClosedUsersBody,
  options?: pageQueryClosedUsersOptions,
): pageQueryClosedUsersResponse {
  const host = getEnvHost();
  const url = host + '/account/bo/user/page/closed';
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
