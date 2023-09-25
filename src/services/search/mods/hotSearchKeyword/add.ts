/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type addBody = defs.search.HotSearchKeywordDTO;
export type addOptions = Record<string, any>;

export type addResponse = Promise<defs.search.Response<number>>;

/**
 * @desc 新增配置
 */
export function request(body: addBody, options?: addOptions): addResponse {
  const host = getEnvHost();
  const url = host + '/search/bo/hotSearchKeyword';
  const fetchOption = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
