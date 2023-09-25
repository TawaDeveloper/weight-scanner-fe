/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type deleteCallbackByTaskIdPath = {
  /** taskId */
  taskId: string;
};
export type deleteCallbackByTaskIdOptions = Record<string, any>;

export type deleteCallbackByTaskIdResponse = Promise<any>;

/**
 * @desc 短信推送回调
 */
export function request(
  path: deleteCallbackByTaskIdPath,
  options?: deleteCallbackByTaskIdOptions,
): deleteCallbackByTaskIdResponse {
  const host = getEnvHost();
  const url =
    host +
    '/message/twilio/callback/{taskId}'.replace(
      /\{[\w]+\}/,
      String(path.taskId),
    );
  const fetchOption = {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
