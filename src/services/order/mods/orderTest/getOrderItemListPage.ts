/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getOrderItemListPageBody = defs.order.OrderItemPageQueryDTO;
export type getOrderItemListPageOptions = Record<string, any>;

export type getOrderItemListPageResponse = Promise<
  defs.order.Response<defs.order.PageInfo<defs.order.OrderItemVO>>
>;

/**
 * @desc 订单商品明细 - 分页查询
 */
export function request(
  body: getOrderItemListPageBody,
  options?: getOrderItemListPageOptions,
): getOrderItemListPageResponse {
  const host = getEnvHost();
  const url = host + '/order/test/order/item/list/page';
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
