/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type pageBrandBody = defs.product.BrandRequest;
export type pageBrandOptions = Record<string, any>;

export type pageBrandResponse = Promise<
  defs.product.Response<defs.product.PageVO<defs.product.BackendBrand>>
>;

/**
 * @desc 分页查询商品品牌
 */
export function request(
  body: pageBrandBody,
  options?: pageBrandOptions,
): pageBrandResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/product/brand/page';
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
