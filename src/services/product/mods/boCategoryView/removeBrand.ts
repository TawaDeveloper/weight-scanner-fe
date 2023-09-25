/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type removeBrandBody = defs.product.CategoryViewVariantRel;
export type removeBrandOptions = Record<string, any>;

export type removeBrandResponse = Promise<defs.product.Response>;

/**
 * @desc 移除商品规格
 */
export function request(
  body: removeBrandBody,
  options?: removeBrandOptions,
): removeBrandResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/categoryView/variant/remove';
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
