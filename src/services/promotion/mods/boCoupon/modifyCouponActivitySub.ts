/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type modifyCouponActivitySubBody = defs.promotion.CouponActivitySubReq;
export type modifyCouponActivitySubPath = {
  /** activityId */
  activityId: number;
};
export type modifyCouponActivitySubOptions = Record<string, any>;

export type modifyCouponActivitySubResponse = Promise<
  defs.promotion.Response<boolean>
>;

/**
 * @desc 修改券活动的商品、类目、门店
 */
export function request(
  body: modifyCouponActivitySubBody,
  path: modifyCouponActivitySubPath,
  options?: modifyCouponActivitySubOptions,
): modifyCouponActivitySubResponse {
  const host = getEnvHost();
  const url =
    host +
    '/promotion/bo/couponActivity/detail/{activityId}/modifySub'.replace(
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
