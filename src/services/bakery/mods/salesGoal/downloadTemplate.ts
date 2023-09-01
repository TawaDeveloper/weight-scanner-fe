/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type downloadTemplateOptions = Record<string, any>;

export type downloadTemplateResponse = Promise<any>;

/**
 * @desc 模版下载
 */
export function request(
  options?: downloadTemplateOptions,
): downloadTemplateResponse {
  const host = getEnvHost();
  const url = host + '/bakery/hot-deli-bakery/api/sales/goal/template/download';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
