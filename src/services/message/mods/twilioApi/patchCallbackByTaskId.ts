/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type patchCallbackByTaskIdPath = {
  /** taskId */
  taskId: string;
};
export type patchCallbackByTaskIdOptions = Record<string, any>;

export type patchCallbackByTaskIdResponse = Promise<any>;

/**
 * @desc 短信推送回调
 */
export function request(
  path: patchCallbackByTaskIdPath,
  options?: patchCallbackByTaskIdOptions,
): patchCallbackByTaskIdResponse {
  const host = getEnvHost();
  const url =
    host +
    '/message/twilio/callback/{taskId}'.replace(
      /\{[\w]+\}/,
      String(path.taskId),
    );
  const fetchOption = {
    method: 'patch',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
