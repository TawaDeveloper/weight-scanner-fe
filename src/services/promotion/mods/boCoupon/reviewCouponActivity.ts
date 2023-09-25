/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type reviewCouponActivityBody = defs.promotion.CouponActivityCheckReq;
export type reviewCouponActivityPath = {
  /** activityId */
  activityId: number;
};
export type reviewCouponActivityOptions = Record<string, any>;

export type reviewCouponActivityResponse = Promise<
  defs.promotion.Response<boolean>
>;

/**
 * @desc 审核优惠券活动
 */
export function request(
  body: reviewCouponActivityBody,
  path: reviewCouponActivityPath,
  options?: reviewCouponActivityOptions,
): reviewCouponActivityResponse {
  const host = getEnvHost();
  const url =
    host +
    '/promotion/bo/couponActivity/detail/{activityId}/active'.replace(
      /\{[\w]+\}/,
      String(path.activityId),
    );
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
