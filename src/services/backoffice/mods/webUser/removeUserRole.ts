/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type removeUserRoleParam = {
  /** id */
  id: number;
};
export type removeUserRoleOptions = Record<string, any>;

export type removeUserRoleResponse = Promise<defs.backoffice.Response>;

/**
 * @desc 移除用户角色
 */
export function request(
  params: removeUserRoleParam,
  options?: removeUserRoleOptions,
): removeUserRoleResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/bo/user/role/remove';
  const fetchOption = {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
    },
    params,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
