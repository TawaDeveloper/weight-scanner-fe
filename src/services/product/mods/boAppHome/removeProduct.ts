/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type removeProductBody = defs.product.UpdateFunctionProduct;
export type removeProductOptions = Record<string, any>;

export type removeProductResponse = Promise<defs.product.Response>;

/**
 * @desc 移除商品
 */
export function request(
  body: removeProductBody,
  options?: removeProductOptions,
): removeProductResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/homePage/setting/function/remove';
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
