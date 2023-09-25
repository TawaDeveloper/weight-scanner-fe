/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type deleteAutoReplyOptions = Record<string, any>;

export type deleteAutoReplyResponse = Promise<any>;

/**
 * @desc 接收用户自动回复短信回调
 */
export function request(
  options?: deleteAutoReplyOptions,
): deleteAutoReplyResponse {
  const host = getEnvHost();
  const url = host + '/message/twilio/autoReply';
  const fetchOption = {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
