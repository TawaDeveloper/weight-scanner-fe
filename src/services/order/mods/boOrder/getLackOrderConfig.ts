/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getLackOrderConfigOptions = Record<string, any>;

export type getLackOrderConfigResponse = Promise<
  defs.order.Response<defs.order.BoLackOrderConfigVO>
>;

/**
 * @desc 查询订单缺货配置
 */
export function request(
  options?: getLackOrderConfigOptions,
): getLackOrderConfigResponse {
  const host = getEnvHost();
  const url = host + '/order/bo/order/config/order/lack/query';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
