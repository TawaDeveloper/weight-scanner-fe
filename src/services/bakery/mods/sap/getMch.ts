/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getMchOptions = Record<string, any>;

export type getMchResponse = Promise<Array<any>>;

/**
 * @desc getMch
 */
export function request(options?: getMchOptions): getMchResponse {
  const host = getEnvHost();
  const url = host + '/hot-deli-bakery/sap/get_mch';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
