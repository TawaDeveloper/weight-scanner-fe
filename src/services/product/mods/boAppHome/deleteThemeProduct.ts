/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type deleteThemeProductParam = {
  /** themeId */
  themeId: number;

  /** variantId */
  variantId: string;
};
export type deleteThemeProductOptions = Record<string, any>;

export type deleteThemeProductResponse = Promise<defs.product.Response>;

/**
 * @desc 移除专题商品
 */
export function request(
  params: deleteThemeProductParam,
  options?: deleteThemeProductOptions,
): deleteThemeProductResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/homePage/setting/theme/product/delete';
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
