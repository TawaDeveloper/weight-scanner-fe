/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type pageVariantStoreParam = {
  /** variantId */
  variantId: string;
};
export type pageVariantStoreOptions = Record<string, any>;

export type pageVariantStoreResponse = Promise<
  defs.product.Response<Array<defs.product.VariantStoreActivity>>
>;

/**
 * @desc 分页查询店铺商品规格
 */
export function request(
  params: pageVariantStoreParam,
  options?: pageVariantStoreOptions,
): pageVariantStoreResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/product/variantStore/page';
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
