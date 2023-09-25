/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type selectDiscountProductBody = defs.product.DiscountProduct;
export type selectDiscountProductOptions = Record<string, any>;

export type selectDiscountProductResponse = Promise<defs.product.Response>;

/**
 * @desc 选择折扣商品
 */
export function request(
  body: selectDiscountProductBody,
  options?: selectDiscountProductOptions,
): selectDiscountProductResponse {
  const host = getEnvHost();
  const url =
    host + '/product/bo/homePage/setting/function/discountProduct/select';
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
