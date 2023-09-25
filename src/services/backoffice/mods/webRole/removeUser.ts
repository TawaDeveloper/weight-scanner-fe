/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type removeUserBody = defs.backoffice.RemoveUserDTO;
export type removeUserOptions = Record<string, any>;

export type removeUserResponse = Promise<defs.backoffice.Response>;

/**
 * @desc 关联人员 - 移除用户
 */
export function request(
  body: removeUserBody,
  options?: removeUserOptions,
): removeUserResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/bo/role/user/remove';
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
