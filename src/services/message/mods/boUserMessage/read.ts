/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type readPath = {
  /** id */
  id: number;
};
export type readOptions = Record<string, any>;

export type readResponse = Promise<defs.message.Response<void>>;

/**
 * @desc 标记消息为已读状态
 */
export function request(path: readPath, options?: readOptions): readResponse {
  const host = getEnvHost();
  const url =
    host +
    '/message/bo/user/message/read/{id}'.replace(/\{[\w]+\}/, String(path.id));
  const fetchOption = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
