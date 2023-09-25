/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type listRegisterSourceOptions = Record<string, any>;

export type listRegisterSourceResponse = Promise<
  defs.account.Response<Array<defs.account.DictionaryVO>>
>;

/**
 * @desc 查询注册来源列表
 */
export function request(
  options?: listRegisterSourceOptions,
): listRegisterSourceResponse {
  const host = getEnvHost();
  const url = host + '/account/bo/user/register-source/list';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
