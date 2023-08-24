/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type putAutoReplyOptions = Record<string, any>;

export type putAutoReplyResponse = Promise<any>;

/**
 * @desc 接收用户自动回复短信回调
 */
export function request(options?: putAutoReplyOptions): putAutoReplyResponse {
  const host = getEnvHost();
  const url = host + '/message/twilio/autoReply';
  const fetchOption = {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
