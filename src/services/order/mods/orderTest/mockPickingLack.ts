/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type mockPickingLackParam = {
  /** orderId */
  orderId: string;
};
export type mockPickingLackOptions = Record<string, any>;

export type mockPickingLackResponse = Promise<any>;

/**
 * @desc mock 缺货的拣货
 */
export function request(
  params: mockPickingLackParam,
  options?: mockPickingLackOptions,
): mockPickingLackResponse {
  const host = getEnvHost();
  const url = host + '/order/test/picking/lack';
  const fetchOption = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    params,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
