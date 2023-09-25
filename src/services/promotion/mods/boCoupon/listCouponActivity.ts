/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type listCouponActivityBody =
  defs.promotion.PageReqDto<defs.promotion.CouponActivityQueryConditionReq>;
export type listCouponActivityOptions = Record<string, any>;

export type listCouponActivityResponse = Promise<
  defs.promotion.Response<defs.promotion.Page<defs.promotion.CouponActivityDto>>
>;

/**
 * @desc 券活动列表
 */
export function request(
  body: listCouponActivityBody,
  options?: listCouponActivityOptions,
): listCouponActivityResponse {
  const host = getEnvHost();
  const url = host + '/promotion/bo/couponActivity/list';
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
