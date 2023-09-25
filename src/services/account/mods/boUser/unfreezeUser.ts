/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type unfreezeUserBody = defs.account.UpdateUserStatusCommandDTO;
export type unfreezeUserOptions = Record<string, any>;

export type unfreezeUserResponse = Promise<defs.account.Response<string>>;

/**
 * @desc 解冻用户
 */
export function request(
  body: unfreezeUserBody,
  options?: unfreezeUserOptions,
): unfreezeUserResponse {
  const host = getEnvHost();
  const url = host + '/account/bo/user/unfreeze';
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
