/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getOrderItemListOptionsOptions = Record<string, any>;

export type getOrderItemListOptionsResponse = Promise<
  defs.order.Response<defs.order.OrderItemListOptionsVO>
>;

/**
 * @desc 订单商品明细 - 条件选项
 */
export function request(
  options?: getOrderItemListOptionsOptions,
): getOrderItemListOptionsResponse {
  const host = getEnvHost();
  const url = host + '/order/test/order/item/list/options';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
