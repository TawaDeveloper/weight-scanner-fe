/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type updateBody = defs.promotion.UpdateDiscountCodeRequest;
export type updateOptions = Record<string, any>;

export type updateResponse = Promise<defs.promotion.Response<void>>;

/**
 * @desc 编辑配置
 */
export function request(
  body: updateBody,
  options?: updateOptions,
): updateResponse {
  const host = getEnvHost();
  const url = host + '/promotion/bo/discountCode/config/update';
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
