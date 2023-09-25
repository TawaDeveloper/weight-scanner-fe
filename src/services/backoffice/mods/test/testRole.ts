/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type testRoleOptions = Record<string, any>;

export type testRoleResponse = Promise<defs.backoffice.Response>;

/**
 * @desc testRole
 */
export function request(options?: testRoleOptions): testRoleResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/test/role';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
