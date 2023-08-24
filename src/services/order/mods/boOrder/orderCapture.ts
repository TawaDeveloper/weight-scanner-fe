/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type orderCaptureParam = {
  /** orderId */
  orderId: string;
};
export type orderCaptureOptions = Record<string, any>;

export type orderCaptureResponse = Promise<defs.order.Response<void>>;

/**
 * @desc 订单列表 - 扣款失败扣款
 */
export function request(
  params: orderCaptureParam,
  options?: orderCaptureOptions,
): orderCaptureResponse {
  const host = getEnvHost();
  const url = host + '/order/bo/order/list/capture/save';
  const fetchOption = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    params,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
