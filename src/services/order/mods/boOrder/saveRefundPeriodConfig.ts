/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type saveRefundPeriodConfigBody = defs.order.BoRefundPeriodConfigDTO;
export type saveRefundPeriodConfigOptions = Record<string, any>;

export type saveRefundPeriodConfigResponse = Promise<defs.order.Response<void>>;

/**
 * @desc 保存售后期限配置
 */
export function request(
  body: saveRefundPeriodConfigBody,
  options?: saveRefundPeriodConfigOptions,
): saveRefundPeriodConfigResponse {
  const host = getEnvHost();
  const url = host + '/order/bo/order/config/refund/period/save';
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
