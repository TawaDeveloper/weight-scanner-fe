/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type auditRefundBody = defs.order.BoRefundAuditDTO;
export type auditRefundOptions = Record<string, any>;

export type auditRefundResponse = Promise<defs.order.Response<void>>;

/**
 * @desc 售后退款审核
 */
export function request(
  body: auditRefundBody,
  options?: auditRefundOptions,
): auditRefundResponse {
  const host = getEnvHost();
  const url = host + '/order/bo/refund/refund/audit';
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
