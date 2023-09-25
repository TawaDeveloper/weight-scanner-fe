/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type batchUpdateStoreVariantBody =
  Array<defs.product.VariantStoreRequest>;
export type batchUpdateStoreVariantOptions = Record<string, any>;

export type batchUpdateStoreVariantResponse = Promise<defs.product.Response>;

/**
 * @desc 批量更新门店商品规格信息
 */
export function request(
  body: batchUpdateStoreVariantBody,
  options?: batchUpdateStoreVariantOptions,
): batchUpdateStoreVariantResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/product/storeVariant/batchUpdate';
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
