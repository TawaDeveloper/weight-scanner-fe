/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type updateUserRoleValidTimeBody =
  defs.backoffice.UpdateUserRoleValidTimeDTO;
export type updateUserRoleValidTimeOptions = Record<string, any>;

export type updateUserRoleValidTimeResponse = Promise<defs.backoffice.Response>;

/**
 * @desc 设置角色有效期
 */
export function request(
  body: updateUserRoleValidTimeBody,
  options?: updateUserRoleValidTimeOptions,
): updateUserRoleValidTimeResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/bo/user/role/validTime/update';
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
