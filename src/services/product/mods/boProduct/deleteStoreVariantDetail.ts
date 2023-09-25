/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type deleteStoreVariantDetailBody = defs.product.StoreVariantDetail;
export type deleteStoreVariantDetailOptions = Record<string, any>;

export type deleteStoreVariantDetailResponse = Promise<defs.product.Response>;

/**
 * @desc 删除门店规格明细
 */
export function request(
  body: deleteStoreVariantDetailBody,
  options?: deleteStoreVariantDetailOptions,
): deleteStoreVariantDetailResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/product/storeVariantDetail/delete';
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
