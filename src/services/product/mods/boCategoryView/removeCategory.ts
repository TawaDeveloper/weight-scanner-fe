/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type removeCategoryBody = defs.product.CategoryViewCategoryRel;
export type removeCategoryOptions = Record<string, any>;

export type removeCategoryResponse = Promise<defs.product.Response>;

/**
 * @desc 移除后台类目
 */
export function request(
  body: removeCategoryBody,
  options?: removeCategoryOptions,
): removeCategoryResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/categoryView/category/remove';
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
