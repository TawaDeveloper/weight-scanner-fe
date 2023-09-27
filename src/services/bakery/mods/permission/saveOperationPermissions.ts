/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type saveOperationPermissionsBody = defs.bakery.AddRolePermissionDto;
export type saveOperationPermissionsOptions = Record<string, any>;

export type saveOperationPermissionsResponse = Promise<
  defs.bakery.Response<boolean>
>;

/**
 * @desc 编辑操作权限
 */
export function request(
  body: saveOperationPermissionsBody,
  options?: saveOperationPermissionsOptions,
): saveOperationPermissionsResponse {
  const host = getEnvHost();
  const url = host + '/hot-deli-bakery/api/permissions/opt';
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
