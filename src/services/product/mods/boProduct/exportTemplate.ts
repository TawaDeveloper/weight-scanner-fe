/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type exportTemplateOptions = Record<string, any>;

export type exportTemplateResponse = Promise<defs.product.Response<void>>;

/**
 * @desc 下载模板导入限购模板
 */
export function request(
  options?: exportTemplateOptions,
): exportTemplateResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/product/template/limit';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
