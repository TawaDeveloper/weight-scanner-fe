/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type acceptOrderBody = defs.order.BoAcceptOrderDTO;
export type acceptOrderOptions = Record<string, any>;

export type acceptOrderResponse = Promise<defs.order.Response<void>>;

/**
 * @desc 接单管理 - 操作接单
 */
export function request(
  body: acceptOrderBody,
  options?: acceptOrderOptions,
): acceptOrderResponse {
  const host = getEnvHost();
  const url = host + '/order/bo/order/accept/save';
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
