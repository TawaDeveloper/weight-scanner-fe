/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type destroyCouponsBody = defs.promotion.CouponDestroyReq;
export type destroyCouponsOptions = Record<string, any>;

export type destroyCouponsResponse = Promise<defs.promotion.Response<boolean>>;

/**
 * @desc 销毁已发券
 */
export function request(
  body: destroyCouponsBody,
  options?: destroyCouponsOptions,
): destroyCouponsResponse {
  const host = getEnvHost();
  const url = host + '/promotion/bo/couponActivity/coupons/destroy';
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
