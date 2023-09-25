/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getOrderDetailItemsForPageBody = defs.bakery.OrderDetailItemDTO;
export type getOrderDetailItemsForPageOptions = Record<string, any>;

export type getOrderDetailItemsForPageResponse = Promise<
  defs.bakery.Response<defs.bakery.IPage<defs.bakery.OrderDetailItem>>
>;

/**
 * @desc 订单详情 - 分页查询商品
 */
export function request(
  body: getOrderDetailItemsForPageBody,
  options?: getOrderDetailItemsForPageOptions,
): getOrderDetailItemsForPageResponse {
  const host = getEnvHost();
  const url = host + '/hot-deli-bakery/api/order/detail/items/page';
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
