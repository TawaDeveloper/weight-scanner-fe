/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type pageAttrClassifyBody = defs.product.AttributeClassifyRequest;
export type pageAttrClassifyOptions = Record<string, any>;

export type pageAttrClassifyResponse = Promise<
  defs.product.Response<defs.product.PageVO<defs.product.AttributeClassify>>
>;

/**
 * @desc 分页查询属性分类
 */
export function request(
  body: pageAttrClassifyBody,
  options?: pageAttrClassifyOptions,
): pageAttrClassifyResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/attribute/classify/page';
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
