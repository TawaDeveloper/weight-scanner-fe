/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getCategoryViewDetailParam = {
  /** categoryId */
  categoryId: number;
};
export type getCategoryViewDetailOptions = Record<string, any>;

export type getCategoryViewDetailResponse = Promise<
  defs.product.Response<defs.product.CategoryViewDetail>
>;

/**
 * @desc 获取前台类目详情
 */
export function request(
  params: getCategoryViewDetailParam,
  options?: getCategoryViewDetailOptions,
): getCategoryViewDetailResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/categoryView/detail';
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
