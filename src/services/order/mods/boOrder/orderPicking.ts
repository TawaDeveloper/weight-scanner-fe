/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type orderPickingBody = defs.order.BoOrderListPickingDTO;
export type orderPickingOptions = Record<string, any>;

export type orderPickingResponse = Promise<defs.order.Response<void>>;

/**
 * @desc 订单列表 - 操作订单拣货
 */
export function request(
  body: orderPickingBody,
  options?: orderPickingOptions,
): orderPickingResponse {
  const host = getEnvHost();
  const url = host + '/order/bo/order/list/picking/save';
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
