/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type listEventHandoutsBody =
  defs.promotion.PageReqDto<defs.promotion.CouponEventHandoutQueryReq>;
export type listEventHandoutsOptions = Record<string, any>;

export type listEventHandoutsResponse = Promise<
  defs.promotion.Response<
    defs.promotion.Page<defs.promotion.CouponEventHandoutRsp>
  >
>;

/**
 * @desc 自动发券列表
 */
export function request(
  body: listEventHandoutsBody,
  options?: listEventHandoutsOptions,
): listEventHandoutsResponse {
  const host = getEnvHost();
  const url = host + '/promotion/bo/couponActivity/event/handout/list';
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
