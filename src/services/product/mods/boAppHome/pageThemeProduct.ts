/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type pageThemeProductParam = {
  /** pageNum */
  pageNum?: number;

  /** pageSize */
  pageSize?: number;

  /** themeId */
  themeId?: number;
};
export type pageThemeProductOptions = Record<string, any>;

export type pageThemeProductResponse = Promise<
  defs.product.Response<defs.product.PageInfo<defs.product.ThemeProduct>>
>;

/**
 * @desc 查询专题区商品列表
 */
export function request(
  params: pageThemeProductParam,
  options?: pageThemeProductOptions,
): pageThemeProductResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/homePage/setting/theme/product/page';
  const fetchOption = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    params,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
