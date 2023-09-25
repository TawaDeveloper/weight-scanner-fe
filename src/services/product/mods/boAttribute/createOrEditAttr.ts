/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type createOrEditAttrBody = defs.product.BackendAttribute;
export type createOrEditAttrOptions = Record<string, any>;

export type createOrEditAttrResponse = Promise<defs.product.Response>;

/**
 * @desc 创建或编辑属性
 */
export function request(
  body: createOrEditAttrBody,
  options?: createOrEditAttrOptions,
): createOrEditAttrResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/attribute/createOrEdit';
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
