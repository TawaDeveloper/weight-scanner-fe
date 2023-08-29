/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type postMchOptions = Record<string, any>;

export type postMchResponse = Promise<boolean>;

/**
 * @desc postMch
 */
export function request(options?: postMchOptions): postMchResponse {
  const host = getEnvHost();
  const url = host + '/bakery/hot-deli-bakery/sap/post_mch';
  const fetchOption = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
