/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type queryImageParam = {
  /** productId */
  productId: number;
};
export type queryImageOptions = Record<string, any>;

export type queryImageResponse = Promise<
  defs.product.Response<Array<defs.product.ProductImage>>
>;

/**
 * @desc 商品主图查询
 */
export function request(
  params: queryImageParam,
  options?: queryImageOptions,
): queryImageResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/product/image/query';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    params,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
