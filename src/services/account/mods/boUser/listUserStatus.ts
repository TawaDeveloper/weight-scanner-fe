/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type listUserStatusOptions = Record<string, any>;

export type listUserStatusResponse = Promise<
  defs.account.Response<Array<defs.account.DictionaryVO>>
>;

/**
 * @desc 查询用户状态列表
 */
export function request(
  options?: listUserStatusOptions,
): listUserStatusResponse {
  const host = getEnvHost();
  const url = host + '/account/bo/user/status/list';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
