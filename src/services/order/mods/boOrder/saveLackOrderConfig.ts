/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type saveLackOrderConfigBody = defs.order.BoLackOrderConfigDTO;
export type saveLackOrderConfigOptions = Record<string, any>;

export type saveLackOrderConfigResponse = Promise<defs.order.Response<void>>;

/**
 * @desc 保存订单缺货配置
 */
export function request(
  body: saveLackOrderConfigBody,
  options?: saveLackOrderConfigOptions,
): saveLackOrderConfigResponse {
  const host = getEnvHost();
  const url = host + '/order/bo/order/config/order/lack/save';
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
