/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type removeAttrBody = defs.product.CategoryAttrRel;
export type removeAttrOptions = Record<string, any>;

export type removeAttrResponse = Promise<defs.product.Response<boolean>>;

/**
 * @desc 移除属性
 */
export function request(
  body: removeAttrBody,
  options?: removeAttrOptions,
): removeAttrResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/category/attr/remove';
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
