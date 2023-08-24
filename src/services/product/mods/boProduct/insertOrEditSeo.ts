/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type insertOrEditSeoBody = defs.product.ProductSeo;
export type insertOrEditSeoOptions = Record<string, any>;

export type insertOrEditSeoResponse = Promise<defs.product.Response>;

/**
 * @desc 新建或编辑商品SEO信息
 */
export function request(
  body: insertOrEditSeoBody,
  options?: insertOrEditSeoOptions,
): insertOrEditSeoResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/product/seo/insertOrEdit';
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
