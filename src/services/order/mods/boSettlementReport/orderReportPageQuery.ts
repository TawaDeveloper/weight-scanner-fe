/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type orderReportPageQueryBody = any;
export type orderReportPageQueryOptions = Record<string, any>;

export type orderReportPageQueryResponse = Promise<
  defs.order.Response<defs.order.PageInfo<any>>
>;

/**
 * @desc 分页查询订单报表
 */
export function request(
  body: orderReportPageQueryBody,
  options?: orderReportPageQueryOptions,
): orderReportPageQueryResponse {
  const host = getEnvHost();
  const url = host + '/order/bo/settlement/report/order/page';
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
