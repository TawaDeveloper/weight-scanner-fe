/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type batchReceiveOrdersBody = defs.order.BoBatchReceiveOrderDTO;
export type batchReceiveOrdersOptions = Record<string, any>;

export type batchReceiveOrdersResponse = Promise<defs.order.Response<number>>;

/**
 * @desc 接单管理 - 批量接单
 */
export function request(
  body: batchReceiveOrdersBody,
  options?: batchReceiveOrdersOptions,
): batchReceiveOrdersResponse {
  const host = getEnvHost();
  const url = host + '/order/bo/order/receive/batch';
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
