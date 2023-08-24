/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type exportOrderDaySummaryListBody = defs.order.ExportOrderDaySummaryDTO;
export type exportOrderDaySummaryListOptions = Record<string, any>;

export type exportOrderDaySummaryListResponse = Promise<any>;

/**
 * @desc 订单日汇总 - 筛选导出
 */
export function request(
  body: exportOrderDaySummaryListBody,
  options?: exportOrderDaySummaryListOptions,
): exportOrderDaySummaryListResponse {
  const host = getEnvHost();
  const url =
    host + '/order/bo/settlement/report/order/day/summary/list/export';
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
