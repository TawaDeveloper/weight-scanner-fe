/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type auditRefundTypeBody = defs.order.BoRefundTypeAuditDTO;
export type auditRefundTypeOptions = Record<string, any>;

export type auditRefundTypeResponse = Promise<defs.order.Response<void>>;

/**
 * @desc 售后类型审核
 */
export function request(
  body: auditRefundTypeBody,
  options?: auditRefundTypeOptions,
): auditRefundTypeResponse {
  const host = getEnvHost();
  const url = host + '/order/bo/refund/type/audit';
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
