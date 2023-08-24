/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type testSatokenExpOptions = Record<string, any>;

export type testSatokenExpResponse = Promise<defs.backoffice.Response>;

/**
 * @desc testSatokenExp
 */
export function request(
  options?: testSatokenExpOptions,
): testSatokenExpResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/test/exp/satoken';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
