/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type updateBody = defs.promotion.UpdateBuyNGetXDiscountRequest;
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
  const url = host + '/promotion/bo/buyN/GetX/discount/config/update';
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
