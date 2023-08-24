/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type optionsCallbackByTaskIdPath = {
  /** taskId */
  taskId: string;
};
export type optionsCallbackByTaskIdOptions = Record<string, any>;

export type optionsCallbackByTaskIdResponse = Promise<any>;

/**
 * @desc 短信推送回调
 */
export function request(
  path: optionsCallbackByTaskIdPath,
  options?: optionsCallbackByTaskIdOptions,
): optionsCallbackByTaskIdResponse {
  const host = getEnvHost();
  const url =
    host +
    '/message/twilio/callback/{taskId}'.replace(
      /\{[\w]+\}/,
      String(path.taskId),
    );
  const fetchOption = {
    method: 'options',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
