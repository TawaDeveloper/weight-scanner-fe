/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type frozenUserBody = defs.account.FrozenUserCommandDTO;
export type frozenUserOptions = Record<string, any>;

export type frozenUserResponse = Promise<defs.account.Response<string>>;

/**
 * @desc 冻结用户
 */
export function request(
  body: frozenUserBody,
  options?: frozenUserOptions,
): frozenUserResponse {
  const host = getEnvHost();
  const url = host + '/account/bo/user/frozen';
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
