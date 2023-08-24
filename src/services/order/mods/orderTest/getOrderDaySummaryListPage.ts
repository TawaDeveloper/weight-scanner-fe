/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getOrderDaySummaryListPageBody = defs.order.OrderDaySummaryPageDTO;
export type getOrderDaySummaryListPageOptions = Record<string, any>;

export type getOrderDaySummaryListPageResponse = Promise<
  defs.order.Response<defs.order.PageInfo<defs.order.OrderDaySummaryItem>>
>;

/**
 * @desc 订单日汇总 - 分页查询
 */
export function request(
  body: getOrderDaySummaryListPageBody,
  options?: getOrderDaySummaryListPageOptions,
): getOrderDaySummaryListPageResponse {
  const host = getEnvHost();
  const url = host + '/order/test/order/day/summary/list/page';
  const fetchOption = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
