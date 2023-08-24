/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type submitReturnParam = {
  /** subRefundId */
  subRefundId: string;
};
export type submitReturnOptions = Record<string, any>;

export type submitReturnResponse = Promise<defs.order.Response<void>>;

/**
 * @desc 退货入库 - 保存
 */
export function request(
  params: submitReturnParam,
  options?: submitReturnOptions,
): submitReturnResponse {
  const host = getEnvHost();
  const url = host + '/order/bo/refund/return/save';
  const fetchOption = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    params,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
