/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type userInfoOptions = Record<string, any>;

export type userInfoResponse = Promise<
  defs.bakery.Response<defs.bakery.LoginUserInfo>
>;

/**
 * @desc 获取/验证用户信息
 */
export function request(options?: userInfoOptions): userInfoResponse {
  const host = getEnvHost();
  const url = host + '/hot-deli-bakery/admin/user-info';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
