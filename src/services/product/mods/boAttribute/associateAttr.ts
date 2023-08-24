/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type associateAttrBody = defs.product.ProductAttr;
export type associateAttrOptions = Record<string, any>;

export type associateAttrResponse = Promise<defs.product.Response>;

/**
 * @desc 关联商品属性
 */
export function request(
  body: associateAttrBody,
  options?: associateAttrOptions,
): associateAttrResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/attribute/attr/update';
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
