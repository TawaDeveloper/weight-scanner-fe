/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getStoreNoDropdownOptions = Record<string, any>;

export type getStoreNoDropdownResponse = Promise<
  defs.account.Response<Array<string>>
>;

/**
 * @desc 查询门店编号下拉列表
 */
export function request(
  options?: getStoreNoDropdownOptions,
): getStoreNoDropdownResponse {
  const host = getEnvHost();
  const url = host + '/account/bo/points/details/loc/store-no/dropdown';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
