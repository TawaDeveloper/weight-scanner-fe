/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getOrderListPageBody = defs.order.OrderReportPageQueryDTO;
export type getOrderListPageOptions = Record<string, any>;

export type getOrderListPageResponse = Promise<
  defs.order.Response<defs.order.PageInfo<defs.order.OrderReportVO>>
>;

/**
 * @desc 订单列表 - 分页查询
 */
export function request(
  body: getOrderListPageBody,
  options?: getOrderListPageOptions,
): getOrderListPageResponse {
  const host = getEnvHost();
  const url = host + '/order/test/order/list/page';
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
