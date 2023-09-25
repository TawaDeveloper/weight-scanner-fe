/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type androidListBody = defs.backoffice.QueryAppVersionRequest;
export type androidListOptions = Record<string, any>;

export type androidListResponse = Promise<
  defs.backoffice.Response<
    defs.backoffice.PageInfo<defs.backoffice.EditConfigAppVersionDTO>
  >
>;

/**
 * @desc 查询安卓版本列表
 */
export function request(
  body: androidListBody,
  options?: androidListOptions,
): androidListResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/bo/config/android/version/list';
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
