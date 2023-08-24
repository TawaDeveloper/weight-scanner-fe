/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type createOrEditCategoryBody = defs.product.Category;
export type createOrEditCategoryOptions = Record<string, any>;

export type createOrEditCategoryResponse = Promise<
  defs.product.Response<boolean>
>;

/**
 * @desc 新建或编辑类目
 */
export function request(
  body: createOrEditCategoryBody,
  options?: createOrEditCategoryOptions,
): createOrEditCategoryResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/category/createOrEdit';
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
