/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getOrderBaseInfoParam = {
  /** orderId */
  orderId: string;
};
export type getOrderBaseInfoOptions = Record<string, any>;

export type getOrderBaseInfoResponse = Promise<
  defs.bakery.Response<defs.bakery.OrderDetailBaseVO>
>;

/**
 * @desc 订单详情 - 查询基础信息
 */
export function request(
  params: getOrderBaseInfoParam,
  options?: getOrderBaseInfoOptions,
): getOrderBaseInfoResponse {
  const host = getEnvHost();
  console.log(host)
  const url = 'http://10.89.24.25:8080' + '/hot-deli-bakery/api/order/detail/base';
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
