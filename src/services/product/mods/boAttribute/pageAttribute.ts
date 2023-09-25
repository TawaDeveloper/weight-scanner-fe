/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type pageAttributeBody = defs.product.AttributeRequest;
export type pageAttributeOptions = Record<string, any>;

export type pageAttributeResponse = Promise<
  defs.product.Response<defs.product.PageVO<defs.product.BackendAttribute>>
>;

/**
 * @desc 查询商品属性
 */
export function request(
  body: pageAttributeBody,
  options?: pageAttributeOptions,
): pageAttributeResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/attribute/page';
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
