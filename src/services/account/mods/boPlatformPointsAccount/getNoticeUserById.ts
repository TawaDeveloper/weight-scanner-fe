/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getNoticeUserByIdParam = {
  /** userId */
  userId: number;
};
export type getNoticeUserByIdOptions = Record<string, any>;

export type getNoticeUserByIdResponse = Promise<
  defs.account.Response<Array<defs.account.UserNameDTO>>
>;

/**
 * @desc 根据账户编码查询提示账户
 */
export function request(
  params: getNoticeUserByIdParam,
  options?: getNoticeUserByIdOptions,
): getNoticeUserByIdResponse {
  const host = getEnvHost();
  const url = host + '/account/bo/platform-points/account/notice-user/by-id';
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
