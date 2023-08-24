/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type updateStoreProductStatusBody =
  Array<defs.product.VariantStoreRequest>;
export type updateStoreProductStatusOptions = Record<string, any>;

export type updateStoreProductStatusResponse = Promise<
  defs.product.Response<void>
>;

/**
 * @desc 批量更新状态门店商品列表
 */
export function request(
  body: updateStoreProductStatusBody,
  options?: updateStoreProductStatusOptions,
): updateStoreProductStatusResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/storeProduct/updateStoreProductStatus';
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
