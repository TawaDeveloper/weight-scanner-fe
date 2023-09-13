/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type loginBody = any;
export type loginOptions = Record<string, any>;

export type loginResponse = Promise<defs.bakery.Response<any>>;

/**
 * @desc 用户登陆
 */
export function request(
  body: loginBody,
  options?: loginOptions,
): loginResponse {
  const host = getEnvHost();
  const url = host + '/bakery/hot-deli-bakery/admin/user/login';
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
