/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getEventTypeDropdownOptions = Record<string, any>;

export type getEventTypeDropdownResponse = Promise<
  defs.account.Response<Array<defs.account.DictionaryVO>>
>;

/**
 * @desc 查询事项类型下拉列表
 */
export function request(
  options?: getEventTypeDropdownOptions,
): getEventTypeDropdownResponse {
  const host = getEnvHost();
  const url = host + '/account/bo/points/details/event-type/dropdown';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
