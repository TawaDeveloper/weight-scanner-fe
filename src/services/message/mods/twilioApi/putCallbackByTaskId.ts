/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type putCallbackByTaskIdPath = {
  /** taskId */
  taskId: string;
};
export type putCallbackByTaskIdOptions = Record<string, any>;

export type putCallbackByTaskIdResponse = Promise<any>;

/**
 * @desc 短信推送回调
 */
export function request(
  path: putCallbackByTaskIdPath,
  options?: putCallbackByTaskIdOptions,
): putCallbackByTaskIdResponse {
  const host = getEnvHost();
  const url =
    host +
    '/message/twilio/callback/{taskId}'.replace(
      /\{[\w]+\}/,
      String(path.taskId),
    );
  const fetchOption = {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
