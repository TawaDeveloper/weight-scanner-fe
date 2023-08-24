/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type closeUserBody = defs.account.UpdateUserStatusCommandDTO;
export type closeUserOptions = Record<string, any>;

export type closeUserResponse = Promise<defs.account.Response<string>>;

/**
 * @desc 注销用户
 */
export function request(
  body: closeUserBody,
  options?: closeUserOptions,
): closeUserResponse {
  const host = getEnvHost();
  const url = host + '/account/bo/user/close';
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
