/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type pageProductBody = defs.product.BackendProductRequest;
export type pageProductOptions = Record<string, any>;

export type pageProductResponse = Promise<
  defs.product.Response<defs.product.PageVO<defs.product.BackendProduct>>
>;

/**
 * @desc 分页查询商品信息
 */
export function request(
  body: pageProductBody,
  options?: pageProductOptions,
): pageProductResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/product/page';
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
