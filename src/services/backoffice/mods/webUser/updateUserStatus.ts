/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type updateUserStatusBody = defs.backoffice.UpdateStatusDTO;
export type updateUserStatusOptions = Record<string, any>;

export type updateUserStatusResponse = Promise<defs.backoffice.Response>;

/**
 * @desc 修改用户状态
 */
export function request(
  body: updateUserStatusBody,
  options?: updateUserStatusOptions,
): updateUserStatusResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/bo/user/status/update';
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
