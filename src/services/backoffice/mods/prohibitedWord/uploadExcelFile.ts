/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type uploadExcelFileFormData = FormData;
export type uploadExcelFileOptions = Record<string, any>;

export type uploadExcelFileResponse = Promise<
  defs.backoffice.Response<defs.backoffice.ProhibitedWordUploadVO>
>;

/**
 * @desc 导入违禁词数据
 */
export function request(
  formData: uploadExcelFileFormData,
  options?: uploadExcelFileOptions,
): uploadExcelFileResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/bo/prohibited-word/upload/template-file';
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
