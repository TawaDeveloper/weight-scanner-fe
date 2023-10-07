/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type optPermissionOptionOptions = Record<string, any>;

export type optPermissionOptionResponse = Promise<
  defs.bakery.Response<Array<defs.bakery.PermissionVo>>
>;

/**
 * @desc 查询所有操作权限(选项)
 */
export function request(
  options?: optPermissionOptionOptions,
): optPermissionOptionResponse {
  const host = getEnvHost();
  const url = host + '/hot-deli-bakery/api/permissions/opt/option';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
