/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type recallUserBody = defs.account.UpdateUserStatusCommandDTO;
export type recallUserOptions = Record<string, any>;

export type recallUserResponse = Promise<defs.account.Response<string>>;

/**
 * @desc 停用召回
 */
export function request(
  body: recallUserBody,
  options?: recallUserOptions,
): recallUserResponse {
  const host = getEnvHost();
  const url = host + '/account/bo/user/recall';
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
