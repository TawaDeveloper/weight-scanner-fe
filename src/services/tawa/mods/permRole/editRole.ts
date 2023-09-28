/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type editRoleBody = defs.tawa.EditRoleRequest;
export type editRoleOptions = Record<string, any>;

export type editRoleResponse = Promise<defs.tawa.Response<boolean>>;

/**
 * @desc 编辑角色
 */
export function request(
  body: editRoleBody,
  options?: editRoleOptions,
): editRoleResponse {
  const host = getEnvHost();
  const url = host + '/tawa/perm/roles';
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
