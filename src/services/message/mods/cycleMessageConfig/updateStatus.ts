/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type updateStatusBody = defs.message.UpdateStatusRequest;
export type updateStatusOptions = Record<string, any>;

export type updateStatusResponse = Promise<defs.message.Response<void>>;

/**
 * @desc 更新状态
 */
export function request(
  body: updateStatusBody,
  options?: updateStatusOptions,
): updateStatusResponse {
  const host = getEnvHost();
  const url = host + '/message/bo/cycleMessage/updateStatus';
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
