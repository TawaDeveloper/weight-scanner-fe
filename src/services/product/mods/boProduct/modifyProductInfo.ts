/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type modifyProductInfoBody = defs.product.ModifyProductInfo;
export type modifyProductInfoOptions = Record<string, any>;

export type modifyProductInfoResponse = Promise<defs.product.Response>;

/**
 * @desc 修改门店商品信息
 */
export function request(
  body: modifyProductInfoBody,
  options?: modifyProductInfoOptions,
): modifyProductInfoResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/product/modify';
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
