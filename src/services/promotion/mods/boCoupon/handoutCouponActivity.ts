/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type handoutCouponActivityBody = defs.promotion.CouponActivityCheckReq;
export type handoutCouponActivityPath = {
  /** activityId */
  activityId: number;
};
export type handoutCouponActivityOptions = Record<string, any>;

export type handoutCouponActivityResponse = Promise<
  defs.promotion.Response<boolean>
>;

/**
 * @desc 启动发券
 */
export function request(
  body: handoutCouponActivityBody,
  path: handoutCouponActivityPath,
  options?: handoutCouponActivityOptions,
): handoutCouponActivityResponse {
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
