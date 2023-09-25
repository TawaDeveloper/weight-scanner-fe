/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type downloadProductTemplateOptions = Record<string, any>;

export type downloadProductTemplateResponse = Promise<any>;

/**
 * @desc 下载商品导入模板
 */
export function request(
  options?: downloadProductTemplateOptions,
): downloadProductTemplateResponse {
  const host = getEnvHost();
  const url = host + '/promotion/bo/couponActivity/detail/product/template';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
