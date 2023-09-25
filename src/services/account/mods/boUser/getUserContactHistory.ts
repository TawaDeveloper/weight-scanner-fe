/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getUserContactHistoryPath = {
  /** userId */
  userId: number;
};
export type getUserContactHistoryOptions = Record<string, any>;

export type getUserContactHistoryResponse = Promise<
  defs.account.Response<defs.account.UserContactHistoryVO>
>;

/**
 * @desc 查询用户的历史联系信息
 */
export function request(
  path: getUserContactHistoryPath,
  options?: getUserContactHistoryOptions,
): getUserContactHistoryResponse {
  const host = getEnvHost();
  const url =
    host +
    '/account/bo/user/contact/history/{userId}'.replace(
      /\{[\w]+\}/,
      String(path.userId),
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
