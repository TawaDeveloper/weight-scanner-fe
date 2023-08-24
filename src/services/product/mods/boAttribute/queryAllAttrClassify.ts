/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type queryAllAttrClassifyOptions = Record<string, any>;

export type queryAllAttrClassifyResponse = Promise<
  defs.product.Response<Array<defs.product.AttributeClassify>>
>;

/**
 * @desc 查询所有属性分类
 */
export function request(
  options?: queryAllAttrClassifyOptions,
): queryAllAttrClassifyResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/attribute/classify/all';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
