/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type updateRoleBody = defs.backoffice.UpdateRoleDTO;
export type updateRoleOptions = Record<string, any>;

export type updateRoleResponse = Promise<defs.backoffice.Response>;

/**
 * @desc 修改角色
 */
export function request(
  body: updateRoleBody,
  options?: updateRoleOptions,
): updateRoleResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/bo/role/update';
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
