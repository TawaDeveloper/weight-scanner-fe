/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type listBody = defs.search.QueryKeywordStatRequest;
export type listOptions = Record<string, any>;

export type listResponse = Promise<
  defs.search.Response<
    defs.search.PageInfo<defs.search.QueryKeywordStatResponse>
  >
>;

/**
 * @desc 统计列表
 */
export function request(body: listBody, options?: listOptions): listResponse {
  const host = getEnvHost();
  const url = host + '/search/bo/keyword/stat/list';
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
