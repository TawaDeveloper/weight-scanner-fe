/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type batchInsertBody = Array<defs.product.Policy>;
export type batchInsertOptions = Record<string, any>;

export type batchInsertResponse = Promise<defs.product.Response>;

/**
 * @desc 批量新增政策声明
 */
export function request(
  body: batchInsertBody,
  options?: batchInsertOptions,
): batchInsertResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/product/policy/batchInsert';
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
