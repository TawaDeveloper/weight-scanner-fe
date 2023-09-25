/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getLevelOneCategoryOptions = Record<string, any>;

export type getLevelOneCategoryResponse = Promise<
  defs.product.Response<Array<defs.product.BackendCategory>>
>;

/**
 * @desc 获取一级类目
 */
export function request(
  options?: getLevelOneCategoryOptions,
): getLevelOneCategoryResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/category/level/one';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
