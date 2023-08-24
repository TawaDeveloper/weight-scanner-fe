/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getOrderDetailParam = {
  /** orderId */
  orderId: string;
};
export type getOrderDetailOptions = Record<string, any>;

export type getOrderDetailResponse = Promise<
  defs.order.Response<defs.order.BoOrderDetailVO>
>;

/**
 * @desc 订单详情 - 查询订单详情
 */
export function request(
  params: getOrderDetailParam,
  options?: getOrderDetailOptions,
): getOrderDetailResponse {
  const host = getEnvHost();
  const url = host + '/order/bo/order/detail/query';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    params,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
