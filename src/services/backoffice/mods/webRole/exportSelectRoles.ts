/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type exportSelectRolesBody = defs.backoffice.ExportRoleReq;
export type exportSelectRolesOptions = Record<string, any>;

export type exportSelectRolesResponse = Promise<any>;

/**
 * @desc 导出勾选角色
 */
export function request(
  body: exportSelectRolesBody,
  options?: exportSelectRolesOptions,
): exportSelectRolesResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/bo/role/select/export';
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
