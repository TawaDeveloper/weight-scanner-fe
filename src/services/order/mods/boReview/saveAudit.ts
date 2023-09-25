/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type saveAuditBody = defs.order.SaveAuditDTO;
export type saveAuditOptions = Record<string, any>;

export type saveAuditResponse = Promise<defs.order.Response<void>>;

/**
 * @desc 保存审核信息
 */
export function request(
  body: saveAuditBody,
  options?: saveAuditOptions,
): saveAuditResponse {
  const host = getEnvHost();
  const url = host + '/order/bo/review/audit/save';
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
