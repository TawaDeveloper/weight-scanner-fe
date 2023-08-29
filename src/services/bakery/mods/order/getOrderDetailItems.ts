/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getOrderDetailItemsBody = defs.bakery.OrderDetailItemDTO;
export type getOrderDetailItemsOptions = Record<string, any>;

export type getOrderDetailItemsResponse = Promise<
  defs.bakery.Response<defs.bakery.IPage<defs.bakery.OrderDetailItem>>
>;

/**
 * @desc 订单详情 - 分页查询商品
 */
export function request(
  body: getOrderDetailItemsBody,
  options?: getOrderDetailItemsOptions,
): getOrderDetailItemsResponse {
  const host = getEnvHost();
  const url = host + '/bakery/hot-deli-bakery/order/detail/items/page';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
