/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type saveAutoAuditConfigParam = {
  /** isAutoAudit */
  isAutoAudit: boolean;
};
export type saveAutoAuditConfigOptions = Record<string, any>;

export type saveAutoAuditConfigResponse = Promise<defs.order.Response<void>>;

/**
 * @desc 保存是否自动审核通过
 */
export function request(
  params: saveAutoAuditConfigParam,
  options?: saveAutoAuditConfigOptions,
): saveAutoAuditConfigResponse {
  const host = getEnvHost();
  const url = host + '/order/bo/review/audit/auto/save';
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
