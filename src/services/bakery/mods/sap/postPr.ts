/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type postPrOptions = Record<string, any>;

export type postPrResponse = Promise<boolean>;

/**
 * @desc postPr
 */
export function request(options?: postPrOptions): postPrResponse {
  const host = getEnvHost();
  const url = host + '/bakery/hot-deli-bakery/sap/post_pr_by_store';
  const fetchOption = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
