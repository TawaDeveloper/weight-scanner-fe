/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type downloadTemplateOptions = Record<string, any>;

export type downloadTemplateResponse = Promise<any>;

/**
 * @desc 下载导入模板
 */
export function request(
  options?: downloadTemplateOptions,
): downloadTemplateResponse {
  const host = getEnvHost();
  const url = host + '/promotion/bo/couponActivity/manual/handout/template';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
