/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type selectProductParam = {
  /** 分类 */
  category: string;

  /** 图片 */
  image: string;

  /** 商品ID */
  productId: number;

  /** 商品英文名 */
  productNameEN: string;

  /** 商品简体名 */
  productNameSCH: string;

  /** 商品繁体名 */
  productNameTCH: string;

  /** 专题区ID */
  themeId: number;

  /** UPC */
  upc: string;

  /** 规格ID */
  variantId: string;
};
export type selectProductOptions = Record<string, any>;

export type selectProductResponse = Promise<defs.product.Response>;

/**
 * @desc 选择商品
 */
export function request(
  params: selectProductParam,
  options?: selectProductOptions,
): selectProductResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/homePage/setting/theme/product/select';
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
