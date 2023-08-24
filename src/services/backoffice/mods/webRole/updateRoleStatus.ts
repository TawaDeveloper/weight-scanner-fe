/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type updateRoleStatusBody = defs.backoffice.UpdateRoleStatusDTO;
export type updateRoleStatusOptions = Record<string, any>;

export type updateRoleStatusResponse = Promise<defs.backoffice.Response>;

/**
 * @desc 修改角色状态
 */
export function request(
  body: updateRoleStatusBody,
  options?: updateRoleStatusOptions,
): updateRoleStatusResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/bo/role/status/update';
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
