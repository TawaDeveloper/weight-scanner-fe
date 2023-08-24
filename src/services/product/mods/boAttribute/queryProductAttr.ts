/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type queryProductAttrParam = {
  /** categoryId */
  categoryId: string;
};
export type queryProductAttrOptions = Record<string, any>;

export type queryProductAttrResponse = Promise<
  defs.product.Response<Array<defs.product.Attribute>>
>;

/**
 * @desc 查询商品属性信息
 */
export function request(
  params: queryProductAttrParam,
  options?: queryProductAttrOptions,
): queryProductAttrResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/attribute/query';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    params,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
