/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type openOrCloseBody = Array<number>;
export type openOrCloseOptions = Record<string, any>;

export type openOrCloseResponse = Promise<defs.promotion.Response<void>>;

/**
 * @desc 批量上架或下架活动商品
 */
export function request(
  body: openOrCloseBody,
  options?: openOrCloseOptions,
): openOrCloseResponse {
  const host = getEnvHost();
  const url = host + '/promotion/bo/saleProduct/batchOpenOrClose';
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
