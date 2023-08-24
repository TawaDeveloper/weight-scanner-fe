/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getNoticeUserByNameParam = {
  /** name */
  name: string;
};
export type getNoticeUserByNameOptions = Record<string, any>;

export type getNoticeUserByNameResponse = Promise<
  defs.account.Response<Array<defs.account.UserNameDTO>>
>;

/**
 * @desc 根据账户名称查询提示账户
 */
export function request(
  params: getNoticeUserByNameParam,
  options?: getNoticeUserByNameOptions,
): getNoticeUserByNameResponse {
  const host = getEnvHost();
  const url = host + '/account/bo/platform-points/account/notice-user/by-name';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    params,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
