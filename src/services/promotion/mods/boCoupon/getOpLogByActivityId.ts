/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getOpLogByActivityIdPath = {
  /** activityId */
  activityId: number;
};
export type getOpLogByActivityIdOptions = Record<string, any>;

export type getOpLogByActivityIdResponse = Promise<
  defs.promotion.Response<Array<defs.promotion.CouponActivityOpLogVO>>
>;

/**
 * @desc 操作记录
 */
export function request(
  path: getOpLogByActivityIdPath,
  options?: getOpLogByActivityIdOptions,
): getOpLogByActivityIdResponse {
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
