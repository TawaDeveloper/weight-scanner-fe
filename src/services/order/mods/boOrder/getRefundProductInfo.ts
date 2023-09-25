/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getRefundProductInfoParam = {
  /** orderId */
  orderId: string;
};
export type getRefundProductInfoOptions = Record<string, any>;

export type getRefundProductInfoResponse = Promise<
  defs.order.Response<defs.order.BoOrderListRefundProductVO>
>;

/**
 * @desc 订单列表 - 查询可退款商品
 */
export function request(
  params: getRefundProductInfoParam,
  options?: getRefundProductInfoOptions,
): getRefundProductInfoResponse {
  const host = getEnvHost();
  const url = host + '/order/bo/order/list/refund/product';
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
