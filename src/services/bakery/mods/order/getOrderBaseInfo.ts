/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getOrderBaseInfoBody = defs.bakery.OrderDetailItemDTO;
export type getOrderBaseInfoOptions = Record<string, any>;

export type getOrderBaseInfoResponse = Promise<
  defs.bakery.Response<defs.bakery.OrderDetailBaseVO>
>;

/**
 * @desc 订单详情 - 查询基础信息
 */
export function request(
  body: getOrderBaseInfoBody,
  options?: getOrderBaseInfoOptions,
): getOrderBaseInfoResponse {
  const host = getEnvHost();
  console.log(host)
  const url = 'http://10.89.24.25:8080'  + '/hot-deli-bakery/api/order/detail/base';
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
