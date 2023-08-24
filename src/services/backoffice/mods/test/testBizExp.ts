/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type testBizExpOptions = Record<string, any>;

export type testBizExpResponse = Promise<defs.backoffice.Response>;

/**
 * @desc testBizExp
 */
export function request(options?: testBizExpOptions): testBizExpResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/test/exp/biz';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
