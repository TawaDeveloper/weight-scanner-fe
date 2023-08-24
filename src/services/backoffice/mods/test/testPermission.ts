/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type testPermissionOptions = Record<string, any>;

export type testPermissionResponse = Promise<defs.backoffice.Response>;

/**
 * @desc testPermission
 */
export function request(
  options?: testPermissionOptions,
): testPermissionResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/test/permission';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
