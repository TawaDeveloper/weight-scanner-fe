/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type insertOrEditProductDetailBody = defs.product.ProductDetail;
export type insertOrEditProductDetailOptions = Record<string, any>;

export type insertOrEditProductDetailResponse = Promise<defs.product.Response>;

/**
 * @desc 新建或更新商品详情配置
 */
export function request(
  body: insertOrEditProductDetailBody,
  options?: insertOrEditProductDetailOptions,
): insertOrEditProductDetailResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/product/productDetail/insertOrEdit';
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
