/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type activeEventHandoutBody = defs.promotion.CouponActivityCheckReq;
export type activeEventHandoutPath = {
  /** id */
  id: number;
};
export type activeEventHandoutOptions = Record<string, any>;

export type activeEventHandoutResponse = Promise<
  defs.promotion.Response<boolean>
>;

/**
 * @desc 自动发券启用/停用
 */
export function request(
  body: activeEventHandoutBody,
  path: activeEventHandoutPath,
  options?: activeEventHandoutOptions,
): activeEventHandoutResponse {
  const host = getEnvHost();
  const url =
    host +
    '/promotion/bo/couponActivity/event/handout/detail/{id}/active'.replace(
      /\{[\w]+\}/,
      String(path.id),
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
