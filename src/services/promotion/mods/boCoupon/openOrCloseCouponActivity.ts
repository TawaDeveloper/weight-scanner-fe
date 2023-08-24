/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type openOrCloseCouponActivityBody =
  defs.promotion.CouponActivityCheckReq;
export type openOrCloseCouponActivityPath = {
  /** activityId */
  activityId: number;
};
export type openOrCloseCouponActivityOptions = Record<string, any>;

export type openOrCloseCouponActivityResponse = Promise<
  defs.promotion.Response<boolean>
>;

/**
 * @desc 启用禁用优惠券活动
 */
export function request(
  body: openOrCloseCouponActivityBody,
  path: openOrCloseCouponActivityPath,
  options?: openOrCloseCouponActivityOptions,
): openOrCloseCouponActivityResponse {
  const host = getEnvHost();
  const url =
    host +
    '/promotion/bo/couponActivity/detail/{activityId}/handout'.replace(
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
