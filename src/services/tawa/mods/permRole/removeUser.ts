/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type removeUserBody = defs.tawa.RemoveUserRequest;
export type removeUserOptions = Record<string, any>;

export type removeUserResponse = Promise<defs.tawa.Response<boolean>>;

/**
 * @desc 关联人员 - 移除用户
 */
export function request(
  body: removeUserBody,
  options?: removeUserOptions,
): removeUserResponse {
  const host = getEnvHost();
  const url = host + '/tawa/perm/roles/user/remove';
  const fetchOption = {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
