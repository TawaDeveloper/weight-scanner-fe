/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type associateCategoryBody = defs.product.CategoryViewCategoryRel;
export type associateCategoryOptions = Record<string, any>;

export type associateCategoryResponse = Promise<defs.product.Response>;

/**
 * @desc 关联后台类目
 */
export function request(
  body: associateCategoryBody,
  options?: associateCategoryOptions,
): associateCategoryResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/categoryView/associate/category';
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
