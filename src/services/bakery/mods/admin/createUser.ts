/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type createUserBody = any;
export type createUserOptions = Record<string, any>;

export type createUserResponse = Promise<defs.bakery.Response<number>>;

/**
 * @desc 创建用户
 */
export function request(
  body: createUserBody,
  options?: createUserOptions,
): createUserResponse {
  const host = getEnvHost();
  const url = host + '/bakery/hot-deli-bakery/admin/user/create';
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
