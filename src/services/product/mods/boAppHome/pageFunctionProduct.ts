/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type pageFunctionProductBody = defs.product.FunctionProductReq;
export type pageFunctionProductOptions = Record<string, any>;

export type pageFunctionProductResponse = Promise<
  defs.product.Response<defs.product.PageInfo<defs.product.FunctionProduct>>
>;

/**
 * @desc 功能区商品列表
 */
export function request(
  body: pageFunctionProductBody,
  options?: pageFunctionProductOptions,
): pageFunctionProductResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/homePage/setting/function/product/list';
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
