/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type exportStoreProductListBody = Array<defs.product.StoreProductList>;
export type exportStoreProductListOptions = Record<string, any>;

export type exportStoreProductListResponse = Promise<any>;

/**
 * @desc 导出门店商品列表
 */
export function request(
  body: exportStoreProductListBody,
  options?: exportStoreProductListOptions,
): exportStoreProductListResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/storeProduct/exportStoreProductList';
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
