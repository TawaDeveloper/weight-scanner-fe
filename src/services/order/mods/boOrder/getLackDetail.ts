/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getLackDetailParam = {
  /** orderId */
  orderId: string;
};
export type getLackDetailOptions = Record<string, any>;

export type getLackDetailResponse = Promise<
  defs.order.Response<defs.order.BoOrderLackDetailVO>
>;

/**
 * @desc 缺货管理 - 查询缺货详情
 */
export function request(
  params: getLackDetailParam,
  options?: getLackDetailOptions,
): getLackDetailResponse {
  const host = getEnvHost();
  const url = host + '/order/bo/order/lack/detail';
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
