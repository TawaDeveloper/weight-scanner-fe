/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getCouponsBody =
  defs.promotion.PageReqDto<defs.promotion.CouponDetailReq>;
export type getCouponsOptions = Record<string, any>;

export type getCouponsResponse = Promise<
  defs.promotion.Response<defs.promotion.Page<defs.promotion.CouponDetailVO>>
>;

/**
 * @desc 已发券管理
 */
export function request(
  body: getCouponsBody,
  options?: getCouponsOptions,
): getCouponsResponse {
  const host = getEnvHost();
  const url = host + '/promotion/bo/couponActivity/coupons';
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
