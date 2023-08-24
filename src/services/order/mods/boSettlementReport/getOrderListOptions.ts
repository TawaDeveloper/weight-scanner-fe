/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getOrderListOptionsOptions = Record<string, any>;

export type getOrderListOptionsResponse = Promise<
  defs.order.Response<defs.order.OrderListOptionsVO>
>;

/**
 * @desc 订单列表 - 条件选项
 */
export function request(
  options?: getOrderListOptionsOptions,
): getOrderListOptionsResponse {
  const host = getEnvHost();
  const url = host + '/order/bo/settlement/report/order/list/options';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
