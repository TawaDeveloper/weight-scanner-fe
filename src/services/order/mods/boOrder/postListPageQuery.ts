/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type postListPageQueryBody = defs.order.BoOrderListOrderDTO;
export type postListPageQueryOptions = Record<string, any>;

export type postListPageQueryResponse = Promise<
  defs.order.Response<defs.order.PageInfo<defs.order.BoOrderListOrderItem>>
>;

/**
 * @desc 订单列表 - 分页查询订单列表
 */
export function request(
  body: postListPageQueryBody,
  options?: postListPageQueryOptions,
): postListPageQueryResponse {
  const host = getEnvHost();
  const url = host + '/order/bo/order/list/page/query';
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
