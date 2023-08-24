/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type disableUserBody = defs.account.UpdateUserStatusCommandDTO;
export type disableUserOptions = Record<string, any>;

export type disableUserResponse = Promise<defs.account.Response<string>>;

/**
 * @desc 停用用户
 */
export function request(
  body: disableUserBody,
  options?: disableUserOptions,
): disableUserResponse {
  const host = getEnvHost();
  const url = host + '/account/bo/user/disable';
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
