/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getOrderListForPageBody = defs.bakery.OrderListPageDTO;
export type getOrderListForPageOptions = Record<string, any>;

export type getOrderListForPageResponse = Promise<
  defs.bakery.Response<defs.bakery.IPage<defs.bakery.OrderListItem>>
>;

/**
 * @desc 订单列表 - 分页查询
 */
export function request(
  body: getOrderListForPageBody,
  options?: getOrderListForPageOptions,
): getOrderListForPageResponse {
  const host = getEnvHost();
  const url = host + '/hot-deli-bakery/api/order/list/page';
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
