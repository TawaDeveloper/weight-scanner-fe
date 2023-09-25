/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getRefundListOptionsOptions = Record<string, any>;

export type getRefundListOptionsResponse = Promise<
  defs.order.Response<defs.order.RefundListOptionsVO>
>;

/**
 * @desc 售后明细 - 条件选项
 */
export function request(
  options?: getRefundListOptionsOptions,
): getRefundListOptionsResponse {
  const host = getEnvHost();
  const url = host + '/order/bo/settlement/report/refund/list/options';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
