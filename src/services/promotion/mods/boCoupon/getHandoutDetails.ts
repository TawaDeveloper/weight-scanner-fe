/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getHandoutDetailsBody =
  defs.promotion.PageReqDto<defs.promotion.CouponDetailReq>;
export type getHandoutDetailsOptions = Record<string, any>;

export type getHandoutDetailsResponse = Promise<
  defs.promotion.Response<defs.promotion.Page<defs.promotion.CouponDetailVO>>
>;

/**
 * @desc 批次详情
 */
export function request(
  body: getHandoutDetailsBody,
  options?: getHandoutDetailsOptions,
): getHandoutDetailsResponse {
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
