/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type setSortBody = defs.product.UpdateFunctionProduct;
export type setSortOptions = Record<string, any>;

export type setSortResponse = Promise<defs.product.Response>;

/**
 * @desc 设置排序
 */
export function request(
  body: setSortBody,
  options?: setSortOptions,
): setSortResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/homePage/setting/function/sort/setting';
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
