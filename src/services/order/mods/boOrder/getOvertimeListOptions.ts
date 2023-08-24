/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getOvertimeListOptionsOptions = Record<string, any>;

export type getOvertimeListOptionsResponse = Promise<
  defs.order.Response<defs.order.BoOvertimeListOptionVO>
>;

/**
 * @desc 超时管理 - 查询条件选项
 */
export function request(
  options?: getOvertimeListOptionsOptions,
): getOvertimeListOptionsResponse {
  const host = getEnvHost();
  const url = host + '/order/bo/order/overtime/list/options';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
