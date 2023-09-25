/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type exportUserPath = {
  /** messageId */
  messageId: number;
};
export type exportUserOptions = Record<string, any>;

export type exportUserResponse = Promise<any>;

/**
 * @desc 导出推送消息的用户的表格
 */
export function request(
  path: exportUserPath,
  options?: exportUserOptions,
): exportUserResponse {
  const host = getEnvHost();
  const url =
    host +
    '/message/bo/message/sms/export/user/{messageId}'.replace(
      /\{[\w]+\}/,
      String(path.messageId),
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
