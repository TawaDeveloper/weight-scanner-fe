/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type pageQueryMemberEnabledBody = defs.account.UserEnabledPageQueryDTO;
export type pageQueryMemberEnabledOptions = Record<string, any>;

export type pageQueryMemberEnabledResponse = Promise<
  defs.account.Response<defs.account.PageInfo<defs.account.UserEnabledVO>>
>;

/**
 * @desc 分页查询已启用的用户
 */
export function request(
  body: pageQueryMemberEnabledBody,
  options?: pageQueryMemberEnabledOptions,
): pageQueryMemberEnabledResponse {
  const host = getEnvHost();
  const url = host + '/account/bo/user/page/enabled';
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
