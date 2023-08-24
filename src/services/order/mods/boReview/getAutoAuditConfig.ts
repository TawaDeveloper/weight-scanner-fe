/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getAutoAuditConfigOptions = Record<string, any>;

export type getAutoAuditConfigResponse = Promise<defs.order.Response<boolean>>;

/**
 * @desc 查询是否自动审核通过
 */
export function request(
  options?: getAutoAuditConfigOptions,
): getAutoAuditConfigResponse {
  const host = getEnvHost();
  const url = host + '/order/bo/review/audit/auto/query';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
