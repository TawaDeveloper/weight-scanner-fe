/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getRefundDetailParam = {
  /** subRefundId */
  subRefundId: string;
};
export type getRefundDetailOptions = Record<string, any>;

export type getRefundDetailResponse = Promise<
  defs.order.Response<defs.order.BoRefundDetailVO>
>;

/**
 * @desc 查询售后详情
 */
export function request(
  params: getRefundDetailParam,
  options?: getRefundDetailOptions,
): getRefundDetailResponse {
  const host = getEnvHost();
  const url = host + '/order/bo/refund/detail/query';
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
