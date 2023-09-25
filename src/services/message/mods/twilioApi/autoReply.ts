/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type autoReplyOptions = Record<string, any>;

export type autoReplyResponse = Promise<any>;

/**
 * @desc 接收用户自动回复短信回调
 */
export function request(options?: autoReplyOptions): autoReplyResponse {
  const host = getEnvHost();
  const url = host + '/message/twilio/autoReply';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
