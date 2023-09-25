/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getUserOperationRecordPath = {
  /** userId */
  userId: number;
};
export type getUserOperationRecordOptions = Record<string, any>;

export type getUserOperationRecordResponse = Promise<
  defs.account.Response<Array<defs.account.UserOperationRecordVO>>
>;

/**
 * @desc 查询用户操作记录
 */
export function request(
  path: getUserOperationRecordPath,
  options?: getUserOperationRecordOptions,
): getUserOperationRecordResponse {
  const host = getEnvHost();
  const url =
    host +
    '/account/bo/user/operation/record/{userId}'.replace(
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
