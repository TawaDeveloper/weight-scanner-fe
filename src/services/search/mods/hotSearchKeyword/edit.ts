/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type editBody = defs.search.HotSearchKeywordDTO;
export type editOptions = Record<string, any>;

export type editResponse = Promise<defs.search.Response>;

/**
 * @desc 编辑配置
 */
export function request(body: editBody, options?: editOptions): editResponse {
  const host = getEnvHost();
  const url = host + '/search/bo/hotSearchKeyword';
  const fetchOption = {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
