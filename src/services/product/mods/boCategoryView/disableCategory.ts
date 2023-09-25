/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type disableCategoryParam = {
  /** categoryViewId */
  categoryViewId: number;

  /** status */
  status: number;
};
export type disableCategoryOptions = Record<string, any>;

export type disableCategoryResponse = Promise<defs.product.Response>;

/**
 * @desc 修改前台类目状态
 */
export function request(
  params: disableCategoryParam,
  options?: disableCategoryOptions,
): disableCategoryResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/categoryView/detail/modifyStatus';
  const fetchOption = {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
    },
    params,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
