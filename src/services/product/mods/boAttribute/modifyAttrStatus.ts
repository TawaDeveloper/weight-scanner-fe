/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type modifyAttrStatusBody = defs.product.BackendAttribute;
export type modifyAttrStatusOptions = Record<string, any>;

export type modifyAttrStatusResponse = Promise<defs.product.Response>;

/**
 * @desc 修改商品属性状态
 */
export function request(
  body: modifyAttrStatusBody,
  options?: modifyAttrStatusOptions,
): modifyAttrStatusResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/attribute/modify';
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
