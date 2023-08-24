/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type associateVariantBody = defs.product.CategoryViewVariantRel;
export type associateVariantOptions = Record<string, any>;

export type associateVariantResponse = Promise<defs.product.Response>;

/**
 * @desc 关联商品规格
 */
export function request(
  body: associateVariantBody,
  options?: associateVariantOptions,
): associateVariantResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/categoryView/associate/variant';
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
