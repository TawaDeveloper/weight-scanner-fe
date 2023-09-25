/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type listEventHandoutRuleBody =
  defs.promotion.PageReqDto<defs.promotion.CouponEventHandoutQueryReq>;
export type listEventHandoutRuleOptions = Record<string, any>;

export type listEventHandoutRuleResponse = Promise<
  defs.promotion.Response<
    defs.promotion.Page<defs.promotion.CouponEventHandoutRsp>
  >
>;

/**
 * @desc 自动发券配置列表
 */
export function request(
  body: listEventHandoutRuleBody,
  options?: listEventHandoutRuleOptions,
): listEventHandoutRuleResponse {
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
