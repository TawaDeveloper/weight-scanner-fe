/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type saveBody = defs.backoffice.ContentCategorySaveDTO;
export type saveOptions = Record<string, any>;

export type saveResponse = Promise<defs.backoffice.Response<string>>;

/**
 * @desc 新建/修改分类
 */
export function request(body: saveBody, options?: saveOptions): saveResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/bo/content-category/save';
  const fetchOption = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
