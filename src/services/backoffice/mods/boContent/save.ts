/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type saveBody = defs.backoffice.ContentDTO;
export type saveOptions = Record<string, any>;

export type saveResponse = Promise<defs.backoffice.Response<string>>;

/**
 * @desc 提交（新建/编辑弹窗）
 */
export function request(body: saveBody, options?: saveOptions): saveResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/bo/content/save';
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
