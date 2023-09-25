/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type listOrdersForPageBody = defs.order.BoAcceptListOrderDTO;
export type listOrdersForPageOptions = Record<string, any>;

export type listOrdersForPageResponse = Promise<
  defs.order.Response<defs.order.PageInfo<defs.order.BoAcceptListOrderItem>>
>;

/**
 * @desc 接单管理 - 分页查询订单列表
 */
export function request(
  body: listOrdersForPageBody,
  options?: listOrdersForPageOptions,
): listOrdersForPageResponse {
  const host = getEnvHost();
  const url = host + '/order/bo/order/accept/list/page/query';
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
