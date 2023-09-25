/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getNoticeUserSelectedByIdPath = {
  /** id */
  id: number;
};
export type getNoticeUserSelectedByIdOptions = Record<string, any>;

export type getNoticeUserSelectedByIdResponse = Promise<
  defs.account.Response<Array<defs.account.UserNameDTO>>
>;

/**
 * @desc 查询已选择的提示账户
 */
export function request(
  path: getNoticeUserSelectedByIdPath,
  options?: getNoticeUserSelectedByIdOptions,
): getNoticeUserSelectedByIdResponse {
  const host = getEnvHost();
  const url =
    host +
    '/account/bo/platform-points/account/notice-user/selected/{id}'.replace(
      /\{[\w]+\}/,
      String(path.id),
    );
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
