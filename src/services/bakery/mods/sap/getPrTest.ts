/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getPrTestOptions = Record<string, any>;

export type getPrTestResponse = Promise<Array<defs.bakery.SapPrEntity>>;

/**
 * @desc getPrTest
 */
export function request(options?: getPrTestOptions): getPrTestResponse {
  const host = getEnvHost();
  const url = host + '/hot-deli-bakery/sap/get_pr_test';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
