/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type listStatusForDropdownOptions = Record<string, any>;

export type listStatusForDropdownResponse = Promise<
  defs.account.Response<Array<defs.account.DictionaryStrVO>>
>;

/**
 * @desc 查询状态下拉列表
 */
export function request(
  options?: listStatusForDropdownOptions,
): listStatusForDropdownResponse {
  const host = getEnvHost();
  const url = host + '/account/bo/platform-points/account/status/dropdown/list';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
