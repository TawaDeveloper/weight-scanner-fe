/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type manualHandoutCouponActivityBody = defs.promotion.CouponHandoutDto;
export type manualHandoutCouponActivityOptions = Record<string, any>;

export type manualHandoutCouponActivityResponse = Promise<
  defs.promotion.Response<boolean>
>;

/**
 * @desc 手动发券
 */
export function request(
  body: manualHandoutCouponActivityBody,
  options?: manualHandoutCouponActivityOptions,
): manualHandoutCouponActivityResponse {
  const host = getEnvHost();
  const url = host + '/promotion/bo/couponActivity/manual/handout';
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
