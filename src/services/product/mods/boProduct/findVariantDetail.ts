/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type findVariantDetailParam = {
  /** variantId */
  variantId: string;
};
export type findVariantDetailOptions = Record<string, any>;

export type findVariantDetailResponse = Promise<
  defs.product.Response<defs.product.VariantDetail>
>;

/**
 * @desc 查询规格明细
 */
export function request(
  params: findVariantDetailParam,
  options?: findVariantDetailOptions,
): findVariantDetailResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/product/variantDetail';
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
