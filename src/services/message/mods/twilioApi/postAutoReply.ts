/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type postAutoReplyOptions = Record<string, any>;

export type postAutoReplyResponse = Promise<any>;

/**
 * @desc 接收用户自动回复短信回调
 */
export function request(options?: postAutoReplyOptions): postAutoReplyResponse {
  const host = getEnvHost();
  const url = host + '/message/twilio/autoReply';
  const fetchOption = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
