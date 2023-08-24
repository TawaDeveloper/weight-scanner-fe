/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type findProductDetailParam = {
  /** productId */
  productId: number;
};
export type findProductDetailOptions = Record<string, any>;

export type findProductDetailResponse = Promise<
  defs.product.Response<defs.product.ProductDetail>
>;

/**
 * @desc 查询商品详情配置
 */
export function request(
  params: findProductDetailParam,
  options?: findProductDetailOptions,
): findProductDetailResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/product/productDetail/query';
  const fetchOption = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    params,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
