/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type associateBrandBody = defs.product.CategoryBrandRel;
export type associateBrandOptions = Record<string, any>;

export type associateBrandResponse = Promise<defs.product.Response<boolean>>;

/**
 * @desc 关联品牌
 */
export function request(
  body: associateBrandBody,
  options?: associateBrandOptions,
): associateBrandResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/category/associate/brand';
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
