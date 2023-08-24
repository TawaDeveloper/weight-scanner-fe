/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type modifyEventHandoutRuleBody = defs.promotion.CouponEventHandoutReq;
export type modifyEventHandoutRuleOptions = Record<string, any>;

export type modifyEventHandoutRuleResponse = Promise<
  defs.promotion.Response<boolean>
>;

/**
 * @desc 自动发券-修改
 */
export function request(
  body: modifyEventHandoutRuleBody,
  options?: modifyEventHandoutRuleOptions,
): modifyEventHandoutRuleResponse {
  const host = getEnvHost();
  const url = host + '/promotion/bo/couponActivity/event/handout';
  const fetchOption = {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
