/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type addCouponActivityBody = defs.promotion.CouponActivityDto;
export type addCouponActivityOptions = Record<string, any>;

export type addCouponActivityResponse = Promise<
  defs.promotion.Response<boolean>
>;

/**
 * @desc 新增券活动
 */
export function request(
  body: addCouponActivityBody,
  options?: addCouponActivityOptions,
): addCouponActivityResponse {
  const host = getEnvHost();
  const url = host + '/promotion/bo/couponActivity';
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
