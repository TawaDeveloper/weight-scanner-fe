/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type batchImportBody = string;
export type batchImportOptions = Record<string, any>;

export type batchImportResponse = Promise<defs.bakery.Response<void>>;

/**
 * @desc 批量导入
 */
export function request(
  body: batchImportBody,
  options?: batchImportOptions,
): batchImportResponse {
  const host = getEnvHost();
  const url = host + '/bakery/hot-deli-bakery/api/sales/goal/batch/import';
  const fetchOption = {
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data: body,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
