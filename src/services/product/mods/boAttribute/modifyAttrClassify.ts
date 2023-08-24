/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type modifyAttrClassifyBody = defs.product.AttributeClassify;
export type modifyAttrClassifyOptions = Record<string, any>;

export type modifyAttrClassifyResponse = Promise<defs.product.Response>;

/**
 * @desc 修改属性分类
 */
export function request(
  body: modifyAttrClassifyBody,
  options?: modifyAttrClassifyOptions,
): modifyAttrClassifyResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/attribute/classify/modify';
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
