/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getRefundItemListOptionsOptions = Record<string, any>;

export type getRefundItemListOptionsResponse = Promise<
  defs.order.Response<defs.order.RefundItemListOptionsVO>
>;

/**
 * @desc 售后商品明细 - 条件选项
 */
export function request(
  options?: getRefundItemListOptionsOptions,
): getRefundItemListOptionsResponse {
  const host = getEnvHost();
  const url = host + '/order/bo/settlement/report/refund/item/list/options';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
