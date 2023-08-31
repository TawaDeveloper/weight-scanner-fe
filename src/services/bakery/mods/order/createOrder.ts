/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type createOrderBody = defs.bakery.CreateOrderDTO;
export type createOrderOptions = Record<string, any>;

export type createOrderResponse = Promise<defs.bakery.Response<string>>;

/**
 * @desc 新建订单 - 提交订单
 */
export function request(
  body: createOrderBody,
  options?: createOrderOptions,
): createOrderResponse {
  const host = getEnvHost();
  const url = host + '/bakery/hot-deli-bakery/order/new/create';
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
