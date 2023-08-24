/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type updateStatusBody = defs.backoffice.ContentCategoryStatusDTO;
export type updateStatusOptions = Record<string, any>;

export type updateStatusResponse = Promise<defs.backoffice.Response<string>>;

/**
 * @desc 修改分类状态
 */
export function request(
  body: updateStatusBody,
  options?: updateStatusOptions,
): updateStatusResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/bo/content-category/status';
  const fetchOption = {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
