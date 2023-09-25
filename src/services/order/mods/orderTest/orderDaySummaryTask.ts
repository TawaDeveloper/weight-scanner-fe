/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type orderDaySummaryTaskOptions = Record<string, any>;

export type orderDaySummaryTaskResponse = Promise<defs.order.Response<void>>;

/**
 * @desc 订单日汇总 - 定时任务
 */
export function request(
  options?: orderDaySummaryTaskOptions,
): orderDaySummaryTaskResponse {
  const host = getEnvHost();
  const url = host + '/order/test/order/day/summary/task';
  const fetchOption = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
