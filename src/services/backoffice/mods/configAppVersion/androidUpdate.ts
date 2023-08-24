/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type androidUpdateBody = defs.backoffice.EditConfigAppVersionDTO;
export type androidUpdateOptions = Record<string, any>;

export type androidUpdateResponse = Promise<defs.backoffice.Response<boolean>>;

/**
 * @desc 编辑安卓版本
 */
export function request(
  body: androidUpdateBody,
  options?: androidUpdateOptions,
): androidUpdateResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/bo/config/android/version';
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
