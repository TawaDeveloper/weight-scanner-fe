/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type downloadTemplateOptions = Record<string, any>;

export type downloadTemplateResponse = Promise<any>;

/**
       * @desc 下载模板
下载 XLSX 格式的导入模板，后续上传文件时应该以这个模板为基础
       */
export function request(
  options?: downloadTemplateOptions,
): downloadTemplateResponse {
  const host = getEnvHost();
  const url = host + '/store/bo/store/activity/template/imageText';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
