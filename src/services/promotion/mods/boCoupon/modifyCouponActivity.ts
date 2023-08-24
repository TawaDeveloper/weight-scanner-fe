/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type modifyCouponActivityBody = defs.promotion.CouponActivityDto;
export type modifyCouponActivityOptions = Record<string, any>;

export type modifyCouponActivityResponse = Promise<
  defs.promotion.Response<boolean>
>;

/**
 * @desc 修改券活动
 */
export function request(
  body: modifyCouponActivityBody,
  options?: modifyCouponActivityOptions,
): modifyCouponActivityResponse {
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
