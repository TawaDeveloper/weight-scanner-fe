/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type createBody = defs.promotion.CreateTimeLimitDiscountRequest;
export type createOptions = Record<string, any>;

export type createResponse = Promise<defs.promotion.Response<void>>;

/**
 * @desc 新增配置
 */
export function request(
  body: createBody,
  options?: createOptions,
): createResponse {
  const host = getEnvHost();
  const url = host + '/promotion/bo/timeLimitDiscount/config/create';
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
