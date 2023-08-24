/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type autoAuditStatusOptions = Record<string, any>;

export type autoAuditStatusResponse = Promise<defs.message.Response<boolean>>;

/**
 * @desc 查询自动审核状态(true:开启自动审核 false:关闭自动审核)
 */
export function request(
  options?: autoAuditStatusOptions,
): autoAuditStatusResponse {
  const host = getEnvHost();
  const url = host + '/message/bo/message/email/autoAuditStatus';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
