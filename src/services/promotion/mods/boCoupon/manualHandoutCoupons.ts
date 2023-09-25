/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type manualHandoutCouponsBody =
  defs.promotion.PageReqDto<defs.promotion.CouponDetailReq>;
export type manualHandoutCouponsOptions = Record<string, any>;

export type manualHandoutCouponsResponse = Promise<
  defs.promotion.Response<defs.promotion.IPage<defs.promotion.CouponDetailVO>>
>;

/**
 * @desc 查看手动发券批次详情
 */
export function request(
  body: manualHandoutCouponsBody,
  options?: manualHandoutCouponsOptions,
): manualHandoutCouponsResponse {
  const host = getEnvHost();
  const url = host + '/promotion/bo/couponActivity/manual/handout/logs/detail';
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
