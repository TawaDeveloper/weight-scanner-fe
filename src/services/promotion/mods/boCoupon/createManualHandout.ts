/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type createManualHandoutBody = defs.promotion.CouponHandoutDto;
export type createManualHandoutOptions = Record<string, any>;

export type createManualHandoutResponse = Promise<
  defs.promotion.Response<boolean>
>;

/**
 * @desc 批量手动发券
 */
export function request(
  body: createManualHandoutBody,
  options?: createManualHandoutOptions,
): createManualHandoutResponse {
  const host = getEnvHost();
  const url = host + '/promotion/bo/couponActivity/manual/handout';
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
