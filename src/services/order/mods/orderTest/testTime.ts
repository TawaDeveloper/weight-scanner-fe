/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type testTimeBody = defs.order.TestDateDTO;
export type testTimeOptions = Record<string, any>;

export type testTimeResponse = Promise<defs.order.Response<void>>;

/**
 * @desc testTime
 */
export function request(
  body: testTimeBody,
  options?: testTimeOptions,
): testTimeResponse {
  const host = getEnvHost();
  const url = host + '/order/test/time';
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
