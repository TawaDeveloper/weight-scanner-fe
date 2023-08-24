/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getOvertimeDetailParam = {
  /** orderId */
  orderId: string;
};
export type getOvertimeDetailOptions = Record<string, any>;

export type getOvertimeDetailResponse = Promise<
  defs.order.Response<defs.order.BoOrderOvertimeDetailVO>
>;

/**
 * @desc 超时管理 - 查询超时详情
 */
export function request(
  params: getOvertimeDetailParam,
  options?: getOvertimeDetailOptions,
): getOvertimeDetailResponse {
  const host = getEnvHost();
  const url = host + '/order/bo/order/overtime/detail';
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
