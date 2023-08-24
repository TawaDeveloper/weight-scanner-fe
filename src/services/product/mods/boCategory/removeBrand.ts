/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type removeBrandBody = defs.product.CategoryBrandRel;
export type removeBrandOptions = Record<string, any>;

export type removeBrandResponse = Promise<defs.product.Response<boolean>>;

/**
 * @desc 移除品牌
 */
export function request(
  body: removeBrandBody,
  options?: removeBrandOptions,
): removeBrandResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/category/brand/remove';
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
