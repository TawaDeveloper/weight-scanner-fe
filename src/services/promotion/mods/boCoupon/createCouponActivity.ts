/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type createCouponActivityBody = defs.promotion.CouponActivityDto;
export type createCouponActivityOptions = Record<string, any>;

export type createCouponActivityResponse = Promise<
  defs.promotion.Response<boolean>
>;

/**
 * @desc 新增券活动
 */
export function request(
  body: createCouponActivityBody,
  options?: createCouponActivityOptions,
): createCouponActivityResponse {
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
