/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type auditBody = defs.message.AuditSiteMessageRequest;
export type auditOptions = Record<string, any>;

export type auditResponse = Promise<defs.message.Response<void>>;

/**
 * @desc 审核消息
 */
export function request(
  body: auditBody,
  options?: auditOptions,
): auditResponse {
  const host = getEnvHost();
  const url = host + '/message/bo/message/site/audit';
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
