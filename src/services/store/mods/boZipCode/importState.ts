/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type importStateFormData = FormData;
export type importStateOptions = Record<string, any>;

export type importStateResponse = Promise<defs.store.Response>;

/**
 * @desc 导入 zip_detail excel
 */
export function request(
  formData: importStateFormData,
  options?: importStateOptions,
): importStateResponse {
  const host = getEnvHost();
  const url = host + '/store/bo/zipcode/state/import';
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
