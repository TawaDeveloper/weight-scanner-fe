/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type cancelOrderParam = {
  /** orderId */
  orderId: string;
};
export type cancelOrderOptions = Record<string, any>;

export type cancelOrderResponse = Promise<defs.order.Response<void>>;

/**
 * @desc 订单列表 - 取消订单
 */
export function request(
  params: cancelOrderParam,
  options?: cancelOrderOptions,
): cancelOrderResponse {
  const host = getEnvHost();
  const url = host + '/order/bo/order/list/cancel';
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
