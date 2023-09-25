/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type manualHandoutLogsBody =
  defs.promotion.PageReqDto<defs.promotion.HandoutLogQueryConditionReq>;
export type manualHandoutLogsOptions = Record<string, any>;

export type manualHandoutLogsResponse = Promise<
  defs.promotion.Response<
    defs.promotion.Page<defs.promotion.CouponHandoutLogVo>
  >
>;

/**
 * @desc 手动发券日志
 */
export function request(
  body: manualHandoutLogsBody,
  options?: manualHandoutLogsOptions,
): manualHandoutLogsResponse {
  const host = getEnvHost();
  const url = host + '/promotion/bo/couponActivity/manual/handout/logs';
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
