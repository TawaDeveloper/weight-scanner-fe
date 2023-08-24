/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getSourceDropdownOptions = Record<string, any>;

export type getSourceDropdownResponse = Promise<
  defs.account.Response<Array<defs.account.DictionaryVO>>
>;

/**
 * @desc 查询积分变更渠道下拉列表
 */
export function request(
  options?: getSourceDropdownOptions,
): getSourceDropdownResponse {
  const host = getEnvHost();
  const url = host + '/account/bo/points/details/source/dropdown';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
