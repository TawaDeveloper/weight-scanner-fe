/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type checkLoginOptions = Record<string, any>;

export type checkLoginResponse = Promise<
  defs.bakery.Response<any>
>;

/**
 * @desc 测试登陆
 */
export function request(options?: checkLoginOptions): checkLoginResponse {
  const host = getEnvHost();
  const url = host + '/bakery/hot-deli-bakery/admin/user/login/check';
  const fetchOption = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
