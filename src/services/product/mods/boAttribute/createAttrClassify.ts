/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type createAttrClassifyBody = defs.product.AttributeClassify;
export type createAttrClassifyOptions = Record<string, any>;

export type createAttrClassifyResponse = Promise<defs.product.Response>;

/**
 * @desc 新增属性分类
 */
export function request(
  body: createAttrClassifyBody,
  options?: createAttrClassifyOptions,
): createAttrClassifyResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/attribute/classify/create';
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
