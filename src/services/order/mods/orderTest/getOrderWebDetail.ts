/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getOrderWebDetailOptions = Record<string, any>;

export type getOrderWebDetailResponse = Promise<
  defs.order.Response<defs.order.WebOrderDetailVO>
>;

/**
 * @desc getOrderWebDetail
 */
export function request(
  options?: getOrderWebDetailOptions,
): getOrderWebDetailResponse {
  const host = getEnvHost();
  const url = host + '/order/test/order/web/detail';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
