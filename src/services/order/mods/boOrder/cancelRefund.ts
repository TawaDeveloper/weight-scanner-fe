/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type cancelRefundParam = {
  /** orderId */
  orderId: string;
};
export type cancelRefundOptions = Record<string, any>;

export type cancelRefundResponse = Promise<defs.order.Response<void>>;

/**
 * @desc 订单列表 - 取消退款失败退款
 */
export function request(
  params: cancelRefundParam,
  options?: cancelRefundOptions,
): cancelRefundResponse {
  const host = getEnvHost();
  const url = host + '/order/bo/order/list/cancel/refund/save';
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
