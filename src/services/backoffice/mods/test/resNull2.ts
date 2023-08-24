/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type resNull2Options = Record<string, any>;

export type resNull2Response = Promise<defs.backoffice.Response>;

/**
 * @desc resNull2
 */
export function request(options?: resNull2Options): resNull2Response {
  const host = getEnvHost();
  const url = host + '/backoffice/test/res/null/2';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
