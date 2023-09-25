/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type selectManualHandoutLogsBody =
  defs.promotion.PageReqDto<defs.promotion.HandoutLogQueryConditionReq>;
export type selectManualHandoutLogsOptions = Record<string, any>;

export type selectManualHandoutLogsResponse = Promise<
  defs.promotion.Response<
    defs.promotion.IPage<defs.promotion.CouponHandoutLogVo>
  >
>;

/**
 * @desc 手动发券日志
 */
export function request(
  body: selectManualHandoutLogsBody,
  options?: selectManualHandoutLogsOptions,
): selectManualHandoutLogsResponse {
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
