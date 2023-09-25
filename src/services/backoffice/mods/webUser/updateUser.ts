/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type updateUserBody = defs.backoffice.UpdateUserDTO;
export type updateUserOptions = Record<string, any>;

export type updateUserResponse = Promise<defs.backoffice.Response>;

/**
 * @desc 编辑用户
 */
export function request(
  body: updateUserBody,
  options?: updateUserOptions,
): updateUserResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/bo/user/update';
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
