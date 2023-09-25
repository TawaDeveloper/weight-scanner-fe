/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getListOvertimeDetailParam = {
  /** orderId */
  orderId: string;
};
export type getListOvertimeDetailOptions = Record<string, any>;

export type getListOvertimeDetailResponse = Promise<
  defs.order.Response<defs.order.BoOrderOvertimeDetailVO>
>;

/**
 * @desc 订单列表 - 查询超时详情
 */
export function request(
  params: getListOvertimeDetailParam,
  options?: getListOvertimeDetailOptions,
): getListOvertimeDetailResponse {
  const host = getEnvHost();
  const url = host + '/order/bo/order/list/overtime/detail';
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
