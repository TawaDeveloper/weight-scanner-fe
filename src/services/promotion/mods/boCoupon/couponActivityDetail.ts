/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type couponActivityDetailPath = {
  /** activityId */
  activityId: number;
};
export type couponActivityDetailOptions = Record<string, any>;

export type couponActivityDetailResponse = Promise<
  defs.promotion.Response<defs.promotion.CouponActivityDto>
>;

/**
 * @desc 查看券活动详情
 */
export function request(
  path: couponActivityDetailPath,
  options?: couponActivityDetailOptions,
): couponActivityDetailResponse {
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
