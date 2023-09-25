/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type exportUserParam = {
  /** token */
  token?: string;
};
export type exportUserOptions = Record<string, any>;

export type exportUserResponse = Promise<defs.message.Response<string>>;

/**
 * @desc 发送消息
 */
export function request(
  params: exportUserParam,
  options?: exportUserOptions,
): exportUserResponse {
  const host = getEnvHost();
  const url = host + '/message/firebase/send';
  const fetchOption = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    params,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
