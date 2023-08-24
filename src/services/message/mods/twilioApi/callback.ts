/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type callbackPath = {
  /** taskId */
  taskId: string;
};
export type callbackOptions = Record<string, any>;

export type callbackResponse = Promise<any>;

/**
 * @desc 短信推送回调
 */
export function request(
  path: callbackPath,
  options?: callbackOptions,
): callbackResponse {
  const host = getEnvHost();
  const url =
    host +
    '/message/twilio/callback/{taskId}'.replace(
      /\{[\w]+\}/,
      String(path.taskId),
    );
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
