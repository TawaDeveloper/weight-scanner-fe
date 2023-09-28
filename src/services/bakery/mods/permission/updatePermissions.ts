/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type updatePermissionsBody = defs.bakery.EditPermissionDto;
export type updatePermissionsOptions = Record<string, any>;

export type updatePermissionsResponse = Promise<defs.bakery.Response<boolean>>;

/**
 * @desc 修改权限
 */
export function request(
  body: updatePermissionsBody,
  options?: updatePermissionsOptions,
): updatePermissionsResponse {
  const host = getEnvHost();
  const url = host + '/bakery/hot-deli-bakery/api/permissions';
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
