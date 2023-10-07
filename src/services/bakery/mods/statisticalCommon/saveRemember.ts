/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type saveRememberBody = defs.bakery.StatisticalSearchConditionVo;
export type saveRememberOptions = Record<string, any>;

export type saveRememberResponse = Promise<defs.bakery.Response<boolean>>;

/**
 * @desc 保存用户记住的筛选条件
 */
export function request(
  body: saveRememberBody,
  options?: saveRememberOptions,
): saveRememberResponse {
  const host = getEnvHost();
  const url = host + '/hot-deli-bakery/api/statistical/common/remember';
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
