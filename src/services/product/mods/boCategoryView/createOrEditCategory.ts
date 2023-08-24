/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type createOrEditCategoryParam = {
  /** templateId */
  templateId: number;
};
export type createOrEditCategoryBody = defs.product.CategoryView;
export type createOrEditCategoryOptions = Record<string, any>;

export type createOrEditCategoryResponse = Promise<defs.product.Response>;

/**
 * @desc 新建或编辑前台类目
 */
export function request(
  params: createOrEditCategoryParam,
  body: createOrEditCategoryBody,
  options?: createOrEditCategoryOptions,
): createOrEditCategoryResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/categoryView/createOrEdit';
  const fetchOption = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    params,
    data: body,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
