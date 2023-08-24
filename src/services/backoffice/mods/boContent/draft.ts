/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type draftBody = defs.backoffice.ContentDTO;
export type draftOptions = Record<string, any>;

export type draftResponse = Promise<defs.backoffice.Response<string>>;

/**
 * @desc 保存草稿（新建/编辑弹窗）
 */
export function request(
  body: draftBody,
  options?: draftOptions,
): draftResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/bo/content/draft';
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
