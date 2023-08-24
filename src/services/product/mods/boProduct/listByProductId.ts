/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type listByProductIdParam = {
  /** productId */
  productId: number;
};
export type listByProductIdOptions = Record<string, any>;

export type listByProductIdResponse = Promise<
  defs.product.Response<Array<defs.product.ProductVariant>>
>;

/**
 * @desc 查询商品规格
 */
export function request(
  params: listByProductIdParam,
  options?: listByProductIdOptions,
): listByProductIdResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/product/variants';
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
