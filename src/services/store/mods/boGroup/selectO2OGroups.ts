/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type selectO2OGroupsOptions = Record<string, any>;

export type selectO2OGroupsResponse = Promise<
  defs.store.Response<Array<string>>
>;

/**
 * @desc 获取O2O区域
 */
export function request(
  options?: selectO2OGroupsOptions,
): selectO2OGroupsResponse {
  const host = getEnvHost();
  const url = host + '/store/bo/smsGroup/o2o';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
