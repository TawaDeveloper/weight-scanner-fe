/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type templateOptions = Record<string, any>;

export type templateResponse = Promise<any>;

/**
 * @desc 模板下载
 */
export function request(options?: templateOptions): templateResponse {
  const host = getEnvHost();
  const url = host + '/search/bo/searchKeyword/template';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
