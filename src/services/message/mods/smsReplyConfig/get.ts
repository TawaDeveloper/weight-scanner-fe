/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getPath = {
  /** id */
  id: number;
};
export type getOptions = Record<string, any>;

export type getResponse = Promise<
  defs.message.Response<defs.message.UpdateSmsReplyDto>
>;

/**
 * @desc 查看详情
 */
export function request(path: getPath, options?: getOptions): getResponse {
  const host = getEnvHost();
  const url =
    host + '/message/bo/sms/reply/{id}'.replace(/\{[\w]+\}/, String(path.id));
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
