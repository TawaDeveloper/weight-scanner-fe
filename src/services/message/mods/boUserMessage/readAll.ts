/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type readAllPath = {
  /** type */
  type: 'AUDIT' | 'NOTIFY';
};
export type readAllOptions = Record<string, any>;

export type readAllResponse = Promise<defs.message.Response<void>>;

/**
 * @desc 标记所有消息为已读状态(消息类型(审核消息:AUDIT  通知消息:NOTIFY))
 */
export function request(
  path: readAllPath,
  options?: readAllOptions,
): readAllResponse {
  const host = getEnvHost();
  const url =
    host +
    '/message/bo/user/message/{type}/readAll'.replace(
      /\{[\w]+\}/,
      String(path.type),
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
