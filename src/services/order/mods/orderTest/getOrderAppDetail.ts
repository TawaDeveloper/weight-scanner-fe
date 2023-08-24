/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getOrderAppDetailOptions = Record<string, any>;

export type getOrderAppDetailResponse = Promise<
  defs.order.Response<defs.order.OrderDetailVO>
>;

/**
 * @desc getOrderAppDetail
 */
export function request(
  options?: getOrderAppDetailOptions,
): getOrderAppDetailResponse {
  const host = getEnvHost();
  const url = host + '/order/test/order/app/detail';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
