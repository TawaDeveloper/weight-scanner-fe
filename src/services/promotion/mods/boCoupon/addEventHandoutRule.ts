/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type addEventHandoutRuleBody = defs.promotion.CouponEventHandoutReq;
export type addEventHandoutRuleOptions = Record<string, any>;

export type addEventHandoutRuleResponse = Promise<
  defs.promotion.Response<boolean>
>;

/**
 * @desc 自动发券-新增
 */
export function request(
  body: addEventHandoutRuleBody,
  options?: addEventHandoutRuleOptions,
): addEventHandoutRuleResponse {
  const host = getEnvHost();
  const url = host + '/promotion/bo/couponActivity/event/handout';
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
