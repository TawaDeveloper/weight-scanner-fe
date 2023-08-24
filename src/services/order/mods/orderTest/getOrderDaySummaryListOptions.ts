/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getOrderDaySummaryListOptionsOptions = Record<string, any>;

export type getOrderDaySummaryListOptionsResponse = Promise<
  defs.order.Response<defs.order.OrderDaySummaryOptionsVO>
>;

/**
 * @desc 订单日汇总 - 条件选项
 */
export function request(
  options?: getOrderDaySummaryListOptionsOptions,
): getOrderDaySummaryListOptionsResponse {
  const host = getEnvHost();
  const url = host + '/order/test/order/day/summary/list/options';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
