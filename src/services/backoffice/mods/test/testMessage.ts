/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type testMessageOptions = Record<string, any>;

export type testMessageResponse = Promise<defs.backoffice.Response>;

/**
 * @desc testMessage
 */
export function request(options?: testMessageOptions): testMessageResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/test/message';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
