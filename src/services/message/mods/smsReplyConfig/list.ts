/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type listBody = defs.message.QuerySmsReplyRequest;
export type listOptions = Record<string, any>;

export type listResponse = Promise<
  defs.message.Response<
    defs.message.PageInfo<defs.message.QuerySmsReplyResponse>
  >
>;

/**
 * @desc 查询短信回复管理列表
 */
export function request(body: listBody, options?: listOptions): listResponse {
  const host = getEnvHost();
  const url = host + '/message/bo/sms/reply/list';
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
