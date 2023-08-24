/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type orderItemPageQueryBody = any;
export type orderItemPageQueryOptions = Record<string, any>;

export type orderItemPageQueryResponse = Promise<
  defs.order.Response<defs.order.PageInfo<any>>
>;

/**
 * @desc 分页查询订单商品明细
 */
export function request(
  body: orderItemPageQueryBody,
  options?: orderItemPageQueryOptions,
): orderItemPageQueryResponse {
  const host = getEnvHost();
  const url = host + '/order/bo/settlement/report/order/item/page';
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
