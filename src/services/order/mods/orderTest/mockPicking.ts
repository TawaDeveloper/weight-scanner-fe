/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type mockPickingParam = {
  /** orderId */
  orderId: string;
};
export type mockPickingOptions = Record<string, any>;

export type mockPickingResponse = Promise<any>;

/**
 * @desc mock 数量-1 的拣货
 */
export function request(
  params: mockPickingParam,
  options?: mockPickingOptions,
): mockPickingResponse {
  const host = getEnvHost();
  const url = host + '/order/test/picking';
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
