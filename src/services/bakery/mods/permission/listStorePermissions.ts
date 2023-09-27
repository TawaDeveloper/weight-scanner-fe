/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type listStorePermissionsPath = {
  /** roleId */
  roleId: number;
};
export type listStorePermissionsOptions = Record<string, any>;

export type listStorePermissionsResponse = Promise<
  defs.bakery.Response<Array<number>>
>;

/**
 * @desc 查询门店数据权限
 */
export function request(
  path: listStorePermissionsPath,
  options?: listStorePermissionsOptions,
): listStorePermissionsResponse {
  const host = getEnvHost();
  const url =
    host +
    '/bakery/hot-deli-bakery/api/permissions/store/{roleId}'.replace(
      /\{[\w]+\}/,
      String(path.roleId),
    );
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
