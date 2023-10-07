/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type permissionOptions = Record<string, any>;

export type permissionResponse = Promise<
  defs.bakery.Response<Array<defs.bakery.PermissionVo>>
>;

/**
 * @desc 获取用户操作权限
 */
export function request(options?: permissionOptions): permissionResponse {
  const host = getEnvHost();
  const url = host + '/hot-deli-bakery/admin/permission';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
