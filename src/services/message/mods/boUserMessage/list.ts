/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type listBody = defs.message.QueryBoUserMessageRequest;
export type listOptions = Record<string, any>;

export type listResponse = Promise<
  defs.message.Response<
    defs.message.PageInfo<defs.message.QueryBoUserMessageResponse>
  >
>;

/**
 * @desc 查询列表
 */
export function request(body: listBody, options?: listOptions): listResponse {
  const host = getEnvHost();
  const url = host + '/message/bo/user/message/list';
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
