/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type updateSortBody = defs.product.ThemeProduct;
export type updateSortOptions = Record<string, any>;

export type updateSortResponse = Promise<defs.product.Response>;

/**
 * @desc 设置排序
 */
export function request(
  body: updateSortBody,
  options?: updateSortOptions,
): updateSortResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/homePage/setting/theme/product/sort';
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
