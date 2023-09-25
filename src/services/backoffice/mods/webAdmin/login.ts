/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type loginBody = defs.backoffice.LoginDTO;
export type loginOptions = Record<string, any>;

export type loginResponse = Promise<
  defs.backoffice.Response<defs.backoffice.LoginInfo>
>;

/**
 * @desc 登录
 */
export function request(
  body: loginBody,
  options?: loginOptions,
): loginResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/bo/admin/login';
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
