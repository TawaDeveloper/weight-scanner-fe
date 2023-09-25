/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type statOptions = Record<string, any>;

export type statResponse = Promise<defs.search.Response>;

/**
 * @desc 执行统计任务
 */
export function request(options?: statOptions): statResponse {
  const host = getEnvHost();
  const url = host + '/search/bo/keyword/stat/execStatJob';
  const fetchOption = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
