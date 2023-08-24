/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type totalOptions = Record<string, any>;

export type totalResponse = Promise<defs.message.Response<number>>;

/**
 * @desc 统计未读消息总数
 */
export function request(options?: totalOptions): totalResponse {
  const host = getEnvHost();
  const url = host + '/message/bo/user/message/total';
  const fetchOption = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
