/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type updateCouponActivityBody = defs.promotion.CouponActivityDto;
export type updateCouponActivityOptions = Record<string, any>;

export type updateCouponActivityResponse = Promise<
  defs.promotion.Response<boolean>
>;

/**
 * @desc 修改券活动
 */
export function request(
  body: updateCouponActivityBody,
  options?: updateCouponActivityOptions,
): updateCouponActivityResponse {
  const host = getEnvHost();
  const url = host + '/promotion/bo/couponActivity';
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
