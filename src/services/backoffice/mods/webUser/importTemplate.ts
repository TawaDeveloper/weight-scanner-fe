/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type importTemplateFormData = FormData;
export type importTemplateOptions = Record<string, any>;

export type importTemplateResponse = Promise<defs.backoffice.Response>;

/**
 * @desc 导入用户数据
 */
export function request(
  formData: importTemplateFormData,
  options?: importTemplateOptions,
): importTemplateResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/bo/user/template/import';
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
