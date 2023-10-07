/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type testConnectionOptions = Record<string, any>;

export type testConnectionResponse = Promise<string>;

/**
 * @desc testConnection
 */
export function request(
  options?: testConnectionOptions,
): testConnectionResponse {
  const host = getEnvHost();
  const url = host + '/hot-deli-bakery/sap/test_connection';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
