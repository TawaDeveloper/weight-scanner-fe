/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type saveRoleBody = defs.backoffice.RoleDTO;
export type saveRoleOptions = Record<string, any>;

export type saveRoleResponse = Promise<defs.backoffice.Response>;

/**
 * @desc 新增角色
 */
export function request(
  body: saveRoleBody,
  options?: saveRoleOptions,
): saveRoleResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/bo/role/save';
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
