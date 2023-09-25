/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type resNull1Options = Record<string, any>;

export type resNull1Response = Promise<defs.backoffice.Response>;

/**
 * @desc resNull1
 */
export function request(options?: resNull1Options): resNull1Response {
  const host = getEnvHost();
  const url = host + '/backoffice/test/res/null/1';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
