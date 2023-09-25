/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type downloadTemplateFileOptions = Record<string, any>;

export type downloadTemplateFileResponse = Promise<any>;

/**
 * @desc 下载违禁词导入模板文件
 */
export function request(
  options?: downloadTemplateFileOptions,
): downloadTemplateFileResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/bo/prohibited-word/download/template-file';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
