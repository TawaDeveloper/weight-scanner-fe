/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type checkCouponActivityBody = defs.promotion.CouponActivityCheckReq;
export type checkCouponActivityPath = {
  /** activityId */
  activityId: number;
};
export type checkCouponActivityOptions = Record<string, any>;

export type checkCouponActivityResponse = Promise<
  defs.promotion.Response<boolean>
>;

/**
 * @desc 审核券活动
 */
export function request(
  body: checkCouponActivityBody,
  path: checkCouponActivityPath,
  options?: checkCouponActivityOptions,
): checkCouponActivityResponse {
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
