/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type saveUserBody = defs.backoffice.UserDTO;
export type saveUserOptions = Record<string, any>;

export type saveUserResponse = Promise<defs.backoffice.Response>;

/**
 * @desc 新建用户
 */
export function request(
  body: saveUserBody,
  options?: saveUserOptions,
): saveUserResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/bo/user/save';
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
