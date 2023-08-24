/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type saveRefundBody = defs.order.BoOrderListRefundDTO;
export type saveRefundOptions = Record<string, any>;

export type saveRefundResponse = Promise<defs.order.Response<void>>;

/**
 * @desc 订单列表 - 保存退款申请
 */
export function request(
  body: saveRefundBody,
  options?: saveRefundOptions,
): saveRefundResponse {
  const host = getEnvHost();
  const url = host + '/order/bo/order/list/refund/save';
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
