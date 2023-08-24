/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getOvertimeOptLogsParam = {
  /** orderId */
  orderId: string;
};
export type getOvertimeOptLogsOptions = Record<string, any>;

export type getOvertimeOptLogsResponse = Promise<
  defs.order.Response<Array<defs.order.BoOrderOvertimeOptLog>>
>;

/**
 * @desc 超时管理 - 查询日志列表
 */
export function request(
  params: getOvertimeOptLogsParam,
  options?: getOvertimeOptLogsOptions,
): getOvertimeOptLogsResponse {
  const host = getEnvHost();
  const url = host + '/order/bo/order/overtime/opt/logs';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    params,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
