/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type modifyStatusBody = defs.product.UpdateFunctionProduct;
export type modifyStatusOptions = Record<string, any>;

export type modifyStatusResponse = Promise<defs.product.Response>;

/**
 * @desc 状态更新
 */
export function request(
  body: modifyStatusBody,
  options?: modifyStatusOptions,
): modifyStatusResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/homePage/setting/function/status/modify';
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
