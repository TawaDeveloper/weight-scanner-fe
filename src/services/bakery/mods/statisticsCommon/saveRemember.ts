/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type saveRememberParam = {
  /** category */
  category: string;
};
export type saveRememberOptions = Record<string, any>;

export type saveRememberResponse = Promise<defs.bakery.Response<ObjectMap>>;

/**
 * @desc 保存用户记住的赛选条件
 */
export function request(
  params: saveRememberParam,
  options?: saveRememberOptions,
): saveRememberResponse {
  const host = getEnvHost();
  const url = host + '/hot-deli-bakery/api/statistics/common/remember';
  const fetchOption = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    params,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
