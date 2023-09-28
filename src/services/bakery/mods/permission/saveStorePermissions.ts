/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type saveStorePermissionsBody = defs.bakery.AddRolePermissionDto;
export type saveStorePermissionsOptions = Record<string, any>;

export type saveStorePermissionsResponse = Promise<
  defs.bakery.Response<boolean>
>;

/**
 * @desc 编辑门店数据权限
 */
export function request(
  body: saveStorePermissionsBody,
  options?: saveStorePermissionsOptions,
): saveStorePermissionsResponse {
  const host = getEnvHost();
  const url = host + '/bakery/hot-deli-bakery/api/permissions/store';
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
