/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type msgParam = {
  /** name */
  name: string;
};
export type msgOptions = Record<string, any>;

export type msgResponse = Promise<defs.bakery.Response>;

/**
 * @desc msg
 */
export function request(params: msgParam, options?: msgOptions): msgResponse {
  const host = getEnvHost();
  const url = host + '/hot-deli-bakery/test/msg';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    params,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
