/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type setAutoAuditStatusPath = {
  /** 自动审核的状态 */
  status: boolean;
};
export type setAutoAuditStatusOptions = Record<string, any>;

export type setAutoAuditStatusResponse = Promise<defs.message.Response<void>>;

/**
 * @desc 设置自动审核状态
 */
export function request(
  path: setAutoAuditStatusPath,
  options?: setAutoAuditStatusOptions,
): setAutoAuditStatusResponse {
  const host = getEnvHost();
  const url =
    host +
    '/message/bo/message/sms/autoAuditStatus/{status}'.replace(
      /\{[\w]+\}/,
      String(path.status),
    );
  const fetchOption = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
