/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type findRememberParam = {
  /** category */
  category: string;
};
export type findRememberOptions = Record<string, any>;

export type findRememberResponse = Promise<defs.bakery.Response<ObjectMap>>;

/**
 * @desc 获取用户记住的赛选条件
 */
export function request(
  params: findRememberParam,
  options?: findRememberOptions,
): findRememberResponse {
  const host = getEnvHost();
  const url = host + '/bakery/hot-deli-bakery/api/statistics/common/remember';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    params,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
