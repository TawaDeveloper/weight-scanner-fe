/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type savePermissionsBody = defs.bakery.AddPermissionDto;
export type savePermissionsOptions = Record<string, any>;

export type savePermissionsResponse = Promise<defs.bakery.Response<number>>;

/**
 * @desc 新建权限
 */
export function request(
  body: savePermissionsBody,
  options?: savePermissionsOptions,
): savePermissionsResponse {
  const host = getEnvHost();
  const url = host + '/hot-deli-bakery/api/permissions';
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
