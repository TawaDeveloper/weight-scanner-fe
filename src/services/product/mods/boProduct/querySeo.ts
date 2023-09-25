/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type querySeoParam = {
  /** productId */
  productId: number;
};
export type querySeoOptions = Record<string, any>;

export type querySeoResponse = Promise<
  defs.product.Response<defs.product.ProductSeo>
>;

/**
 * @desc 查询商品SEO信息
 */
export function request(
  params: querySeoParam,
  options?: querySeoOptions,
): querySeoResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/product/seo/query';
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
