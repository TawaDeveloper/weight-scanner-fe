/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getLevelOneCategoryParam = {
  /** templateId */
  templateId: number;
};
export type getLevelOneCategoryOptions = Record<string, any>;

export type getLevelOneCategoryResponse = Promise<
  defs.product.Response<Array<defs.product.CategoryView>>
>;

/**
 * @desc 根据模板ID获取一级前台类目
 */
export function request(
  params: getLevelOneCategoryParam,
  options?: getLevelOneCategoryOptions,
): getLevelOneCategoryResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/categoryView/level/one';
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
