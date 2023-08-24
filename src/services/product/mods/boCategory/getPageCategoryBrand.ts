/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getPageCategoryBrandBody = defs.product.BrandRequest;
export type getPageCategoryBrandOptions = Record<string, any>;

export type getPageCategoryBrandResponse = Promise<
  defs.product.Response<defs.product.PageVO<defs.product.BackendBrand>>
>;

/**
 * @desc 查询类目品牌
 */
export function request(
  body: getPageCategoryBrandBody,
  options?: getPageCategoryBrandOptions,
): getPageCategoryBrandResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/category/categoryBrand/page';
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
