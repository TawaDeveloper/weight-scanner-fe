/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type insertOrEditBrandBody = defs.product.BackendBrand;
export type insertOrEditBrandOptions = Record<string, any>;

export type insertOrEditBrandResponse = Promise<defs.product.Response>;

/**
 * @desc 新建或编辑品牌
 */
export function request(
  body: insertOrEditBrandBody,
  options?: insertOrEditBrandOptions,
): insertOrEditBrandResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/product/brand/insertOrEdit';
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
