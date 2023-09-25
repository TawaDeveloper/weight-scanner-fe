/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type listProductByCategoryIdsBody = Array<number>;
export type listProductByCategoryIdsOptions = Record<string, any>;

export type listProductByCategoryIdsResponse = Promise<
  defs.product.Response<Array<defs.product.BackendProduct>>
>;

/**
 * @desc 通过分类Ids查询商品
 */
export function request(
  body: listProductByCategoryIdsBody,
  options?: listProductByCategoryIdsOptions,
): listProductByCategoryIdsResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/product/categoryIds';
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
