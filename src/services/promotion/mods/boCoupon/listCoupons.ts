/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type listCouponsBody =
  defs.promotion.PageReqDto<defs.promotion.CouponDetailReq>;
export type listCouponsOptions = Record<string, any>;

export type listCouponsResponse = Promise<
  defs.promotion.Response<defs.promotion.IPage<defs.promotion.CouponDetailVO>>
>;

/**
 * @desc 已发券列表
 */
export function request(
  body: listCouponsBody,
  options?: listCouponsOptions,
): listCouponsResponse {
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
