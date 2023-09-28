/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type listOperationPermissionsPath = {
  /** roleId */
  roleId: number;
};
export type listOperationPermissionsOptions = Record<string, any>;

export type listOperationPermissionsResponse = Promise<
  defs.bakery.Response<Array<number>>
>;

/**
 * @desc 查询操作权限
 */
export function request(
  path: listOperationPermissionsPath,
  options?: listOperationPermissionsOptions,
): listOperationPermissionsResponse {
  const host = getEnvHost();
  const url =
    host +
    '/hot-deli-bakery/api/permissions/opt/{roleId}'.replace(
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
