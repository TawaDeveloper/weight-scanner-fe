/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getRefundPeriodConfigOptions = Record<string, any>;

export type getRefundPeriodConfigResponse = Promise<
  defs.order.Response<defs.order.BoRefundPeriodConfigVO>
>;

/**
 * @desc 查询售后期限配置
 */
export function request(
  options?: getRefundPeriodConfigOptions,
): getRefundPeriodConfigResponse {
  const host = getEnvHost();
  const url = host + '/order/bo/order/config/refund/period/query';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
