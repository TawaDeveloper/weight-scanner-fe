/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type timeZoneOptions = Record<string, any>;

export type timeZoneResponse = Promise<defs.store.Response<Array<string>>>;

/**
 * @desc 时区列表
 */
export function request(options?: timeZoneOptions): timeZoneResponse {
  const host = getEnvHost();
  const url = host + '/store/bo/store/timeZone';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
