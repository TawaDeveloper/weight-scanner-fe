/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type saveRoleBody = defs.tawa.AddRoleRequest;
export type saveRoleOptions = Record<string, any>;

export type saveRoleResponse = Promise<defs.tawa.Response<number>>;

/**
 * @desc 新增角色
 */
export function request(
  body: saveRoleBody,
  options?: saveRoleOptions,
): saveRoleResponse {
  const host = getEnvHost();
  const url = host + '/tawa/perm/roles';
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
