/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type logoutOptions = Record<string, any>;

export type logoutResponse = Promise<defs.backoffice.Response>;

/**
 * @desc 退出
 */
export function request(options?: logoutOptions): logoutResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/bo/admin/logout';
  const fetchOption = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
