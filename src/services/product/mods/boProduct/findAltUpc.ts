/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type findAltUpcBody = defs.product.UpcRequest;
export type findAltUpcOptions = Record<string, any>;

export type findAltUpcResponse = Promise<
  defs.product.Response<defs.product.PageVO<string>>
>;

/**
 * @desc 查询子upc
 */
export function request(
  body: findAltUpcBody,
  options?: findAltUpcOptions,
): findAltUpcResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/product/altUpc';
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
