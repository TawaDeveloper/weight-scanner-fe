/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type batchImportFormData = FormData;
export type batchImportOptions = Record<string, any>;

export type batchImportResponse = Promise<defs.bakery.Response<void>>;

/**
 * @desc 批量导入
 */
export function request(
  formData: batchImportFormData,
  options?: batchImportOptions,
): batchImportResponse {
  const host = getEnvHost();
  const url = host + '/bakery/hot-deli-bakery/api/sales/goal/batch/import';
  const fetchOption = {
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data: formData,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
