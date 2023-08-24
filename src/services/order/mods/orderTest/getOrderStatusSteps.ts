/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getOrderStatusStepsParam = {
  /** orderId */
  orderId: string;
};
export type getOrderStatusStepsOptions = Record<string, any>;

export type getOrderStatusStepsResponse = Promise<
  defs.order.Response<Array<defs.order.BoOrderDetailStatusStep>>
>;

/**
 * @desc getOrderStatusSteps
 */
export function request(
  params: getOrderStatusStepsParam,
  options?: getOrderStatusStepsOptions,
): getOrderStatusStepsResponse {
  const host = getEnvHost();
  const url = host + '/order/test/order/status/steps';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    params,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
