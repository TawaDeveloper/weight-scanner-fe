/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type deletePermissionsPath = {
  /** id */
  id: number;
};
export type deletePermissionsOptions = Record<string, any>;

export type deletePermissionsResponse = Promise<defs.bakery.Response<boolean>>;

/**
 * @desc 删除权限
 */
export function request(
  path: deletePermissionsPath,
  options?: deletePermissionsOptions,
): deletePermissionsResponse {
  const host = getEnvHost();
  const url =
    host +
    '/bakery/hot-deli-bakery/api/permissions/{id}'.replace(
      /\{[\w]+\}/,
      String(path.id),
    );
  const fetchOption = {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
