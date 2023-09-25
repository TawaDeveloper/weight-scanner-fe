/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type deleteCategoryDetailParam = {
  /** categoryViewId */
  categoryViewId: number;
};
export type deleteCategoryDetailOptions = Record<string, any>;

export type deleteCategoryDetailResponse = Promise<defs.product.Response>;

/**
 * @desc 删除前台类目
 */
export function request(
  params: deleteCategoryDetailParam,
  options?: deleteCategoryDetailOptions,
): deleteCategoryDetailResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/categoryView/detail/delete';
  const fetchOption = {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
    },
    params,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
