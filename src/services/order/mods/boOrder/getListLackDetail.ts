/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getListLackDetailParam = {
  /** orderId */
  orderId: string;
};
export type getListLackDetailOptions = Record<string, any>;

export type getListLackDetailResponse = Promise<
  defs.order.Response<defs.order.BoOrderLackDetailVO>
>;

/**
 * @desc 订单列表 - 查询缺货详情
 */
export function request(
  params: getListLackDetailParam,
  options?: getListLackDetailOptions,
): getListLackDetailResponse {
  const host = getEnvHost();
  const url = host + '/order/bo/order/list/lack/detail';
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
