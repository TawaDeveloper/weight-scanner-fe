/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type disRoleByDepBody = defs.backoffice.RoleDepDistributeDTO;
export type disRoleByDepOptions = Record<string, any>;

export type disRoleByDepResponse = Promise<defs.backoffice.Response>;

/**
 * @desc 分配角色
 */
export function request(
  body: disRoleByDepBody,
  options?: disRoleByDepOptions,
): disRoleByDepResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/bo/role/assign/department';
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
