/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type queryStoreProductListBody = defs.product.QueryStoreProductCondition;
export type queryStoreProductListOptions = Record<string, any>;

export type queryStoreProductListResponse = Promise<
  defs.product.Response<defs.product.PageVO<defs.product.StoreProductList>>
>;

/**
 * @desc 查询门店商品列表
 */
export function request(
  body: queryStoreProductListBody,
  options?: queryStoreProductListOptions,
): queryStoreProductListResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/storeProduct/queryStoreProductList';
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
