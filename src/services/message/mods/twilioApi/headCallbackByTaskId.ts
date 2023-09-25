/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type headCallbackByTaskIdPath = {
  /** taskId */
  taskId: string;
};
export type headCallbackByTaskIdOptions = Record<string, any>;

export type headCallbackByTaskIdResponse = Promise<any>;

/**
 * @desc 短信推送回调
 */
export function request(
  path: headCallbackByTaskIdPath,
  options?: headCallbackByTaskIdOptions,
): headCallbackByTaskIdResponse {
  const host = getEnvHost();
  const url =
    host +
    '/message/twilio/callback/{taskId}'.replace(
      /\{[\w]+\}/,
      String(path.taskId),
    );
  const fetchOption = {
    method: 'head',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
