/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type checkOnActivityBody = Array<string>;
export type checkOnActivityOptions = Record<string, any>;

export type checkOnActivityResponse = Promise<
  defs.promotion.Response<Array<string>>
>;

/**
 * @desc 查询商品是否参加活动
 */
export function request(
  body: checkOnActivityBody,
  options?: checkOnActivityOptions,
): checkOnActivityResponse {
  const host = getEnvHost();
  const url = host + '/promotion/bo/saleProduct/checkOnActivity';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
