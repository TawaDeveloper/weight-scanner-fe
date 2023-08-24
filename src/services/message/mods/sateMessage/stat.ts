/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type statBody = defs.message.MessageStateRequest;
export type statOptions = Record<string, any>;

export type statResponse = Promise<
  defs.message.Response<defs.message.MessageStateResponse>
>;

/**
 * @desc 消息统计
 */
export function request(body: statBody, options?: statOptions): statResponse {
  const host = getEnvHost();
  const url = host + '/message/bo/message/site/stat';
  const fetchOption = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
