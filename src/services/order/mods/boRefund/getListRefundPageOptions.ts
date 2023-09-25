/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getListRefundPageOptionsOptions = Record<string, any>;

export type getListRefundPageOptionsResponse = Promise<
  defs.order.Response<defs.order.BoListRefundOptionVO>
>;

/**
 * @desc 查询售后列表条件选项
 */
export function request(
  options?: getListRefundPageOptionsOptions,
): getListRefundPageOptionsResponse {
  const host = getEnvHost();
  const url = host + '/order/bo/refund/list/page/options';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
