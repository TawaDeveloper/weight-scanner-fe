/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type listCategoryEnabledOptions = Record<string, any>;

export type listCategoryEnabledResponse = Promise<
  defs.backoffice.Response<Array<defs.backoffice.ContentCategorySimpleVO>>
>;

/**
 * @desc 查询全部的内容分类列表
 */
export function request(
  options?: listCategoryEnabledOptions,
): listCategoryEnabledResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/bo/content/category/list';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
