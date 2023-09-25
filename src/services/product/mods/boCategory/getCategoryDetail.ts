/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getCategoryDetailParam = {
  /** categoryId */
  categoryId: string;
};
export type getCategoryDetailOptions = Record<string, any>;

export type getCategoryDetailResponse = Promise<
  defs.product.Response<defs.product.CategoryDetail>
>;

/**
 * @desc 获取类目详情
 */
export function request(
  params: getCategoryDetailParam,
  options?: getCategoryDetailOptions,
): getCategoryDetailResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/category/detail';
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
