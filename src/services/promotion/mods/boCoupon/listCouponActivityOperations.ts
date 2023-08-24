/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type listCouponActivityOperationsPath = {
  /** activityId */
  activityId: number;
};
export type listCouponActivityOperationsOptions = Record<string, any>;

export type listCouponActivityOperationsResponse = Promise<
  defs.promotion.Response<Array<defs.promotion.CouponActivityOpLogVO>>
>;

/**
 * @desc 查看券活动操作记录
 */
export function request(
  path: listCouponActivityOperationsPath,
  options?: listCouponActivityOperationsOptions,
): listCouponActivityOperationsResponse {
  const host = getEnvHost();
  const url =
    host +
    '/promotion/bo/couponActivity/opLog/{activityId}'.replace(
      /\{[\w]+\}/,
      String(path.activityId),
    );
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
