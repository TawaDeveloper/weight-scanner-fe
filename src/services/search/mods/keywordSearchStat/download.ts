/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type downloadOptions = Record<string, any>;

export type downloadResponse = Promise<any>;

/**
 * @desc 导出数据
 */
export function request(options?: downloadOptions): downloadResponse {
  const host = getEnvHost();
  const url = host + '/search/bo/keyword/stat/download';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
