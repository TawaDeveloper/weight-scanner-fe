/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type updateProductBody = defs.product.BackendProduct;
export type updateProductOptions = Record<string, any>;

export type updateProductResponse = Promise<defs.product.Response>;

/**
 * @desc 基本信息设置
 */
export function request(
  body: updateProductBody,
  options?: updateProductOptions,
): updateProductResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/product/update';
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
