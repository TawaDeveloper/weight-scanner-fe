/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type queryCouponActivityPath = {
  /** activityId */
  activityId: number;
};
export type queryCouponActivityOptions = Record<string, any>;

export type queryCouponActivityResponse = Promise<
  defs.promotion.Response<defs.promotion.CouponActivityDto>
>;

/**
 * @desc 券活动明细
 */
export function request(
  path: queryCouponActivityPath,
  options?: queryCouponActivityOptions,
): queryCouponActivityResponse {
  const host = getEnvHost();
  const url =
    host +
    '/promotion/bo/couponActivity/detail/{activityId}'.replace(
      /\{[\w]+\}/,
      String(path.activityId),
    );
  const fetchOption = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
