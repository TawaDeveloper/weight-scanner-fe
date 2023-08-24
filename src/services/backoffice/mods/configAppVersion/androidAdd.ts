/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type androidAddBody = defs.backoffice.ConfigAppVersionDTO;
export type androidAddOptions = Record<string, any>;

export type androidAddResponse = Promise<defs.backoffice.Response<number>>;

/**
 * @desc 新增安卓版本
 */
export function request(
  body: androidAddBody,
  options?: androidAddOptions,
): androidAddResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/bo/config/android/version';
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
