/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type batchModifyStatusBody = Array<defs.product.UpdateFunctionProduct>;
export type batchModifyStatusOptions = Record<string, any>;

export type batchModifyStatusResponse = Promise<defs.product.Response>;

/**
 * @desc 批量更新状态
 */
export function request(
  body: batchModifyStatusBody,
  options?: batchModifyStatusOptions,
): batchModifyStatusResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/homePage/setting/function/status/batchModify';
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
