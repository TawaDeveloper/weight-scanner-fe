/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type addDeliveryFeeBody = defs.order.AddDeliveryFeeDTO;
export type addDeliveryFeeOptions = Record<string, any>;

export type addDeliveryFeeResponse = Promise<defs.order.Response<void>>;

/**
 * @desc 超时管理 - 附加配送费
 */
export function request(
  body: addDeliveryFeeBody,
  options?: addDeliveryFeeOptions,
): addDeliveryFeeResponse {
  const host = getEnvHost();
  const url = host + '/order/bo/order/overtime/delivery_fee/add';
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
