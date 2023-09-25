/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getReOrderItemParam = {
  /** orderId */
  orderId: string;
};
export type getReOrderItemOptions = Record<string, any>;

export type getReOrderItemResponse = Promise<defs.order.Response<any>>;

/**
 * @desc getReOrderItem
 */
export function request(
  params: getReOrderItemParam,
  options?: getReOrderItemOptions,
): getReOrderItemResponse {
  const host = getEnvHost();
  const newPath = '/order/test/reorder';
  const url = `${host}${newPath}`;

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
