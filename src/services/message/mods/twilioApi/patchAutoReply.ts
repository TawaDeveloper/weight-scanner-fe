/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type patchAutoReplyOptions = Record<string, any>;

export type patchAutoReplyResponse = Promise<any>;

/**
 * @desc 接收用户自动回复短信回调
 */
export function request(
  options?: patchAutoReplyOptions,
): patchAutoReplyResponse {
  const host = getEnvHost();
  const url = host + '/message/twilio/autoReply';
  const fetchOption = {
    method: 'patch',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
