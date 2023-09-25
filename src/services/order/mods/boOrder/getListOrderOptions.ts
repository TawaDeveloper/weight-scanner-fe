/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getListOrderOptionsOptions = Record<string, any>;

export type getListOrderOptionsResponse = Promise<
  defs.order.Response<defs.order.BoOrderListOptionVO>
>;

/**
 * @desc 订单列表 - 查询订单列表条件
 */
export function request(
  options?: getListOrderOptionsOptions,
): getListOrderOptionsResponse {
  const host = getEnvHost();
  const url = host + '/order/bo/order/list/page/options';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
