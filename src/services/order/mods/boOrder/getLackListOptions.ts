/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getLackListOptionsOptions = Record<string, any>;

export type getLackListOptionsResponse = Promise<
  defs.order.Response<defs.order.BoLackListOptionVO>
>;

/**
 * @desc 缺货管理 - 查询条件选项
 */
export function request(
  options?: getLackListOptionsOptions,
): getLackListOptionsResponse {
  const host = getEnvHost();
  const url = host + '/order/bo/order/lack/list/options';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
