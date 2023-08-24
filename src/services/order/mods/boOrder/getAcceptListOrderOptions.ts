/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getAcceptListOrderOptionsOptions = Record<string, any>;

export type getAcceptListOrderOptionsResponse = Promise<
  defs.order.Response<defs.order.BoAcceptListOrderOptionVO>
>;

/**
 * @desc 接单管理 - 查询搜索条件选项
 */
export function request(
  options?: getAcceptListOrderOptionsOptions,
): getAcceptListOrderOptionsResponse {
  const host = getEnvHost();
  const url = host + '/order/bo/order/accept/list/page/options';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
