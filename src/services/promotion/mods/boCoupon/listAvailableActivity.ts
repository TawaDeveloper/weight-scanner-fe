/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type listAvailableActivityOptions = Record<string, any>;

export type listAvailableActivityResponse = Promise<
  defs.promotion.Response<Array<defs.promotion.CouponActivityDto>>
>;

/**
 * @desc 可用券活动列表
 */
export function request(
  options?: listAvailableActivityOptions,
): listAvailableActivityResponse {
  const host = getEnvHost();
  const url =
    host + '/promotion/bo/couponActivity/manual/handout/availableActivity';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
