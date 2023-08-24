/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getPageCategoryAttrBody = defs.product.CategoryAttrRequest;
export type getPageCategoryAttrOptions = Record<string, any>;

export type getPageCategoryAttrResponse = Promise<
  defs.product.Response<defs.product.PageVO<defs.product.CategoryAttr>>
>;

/**
 * @desc 查询类目属性
 */
export function request(
  body: getPageCategoryAttrBody,
  options?: getPageCategoryAttrOptions,
): getPageCategoryAttrResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/category/categoryAttr/page';
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
