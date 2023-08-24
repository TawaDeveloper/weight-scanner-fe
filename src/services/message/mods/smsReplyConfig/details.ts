/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type detailsBody = defs.message.QuerySmsReplyDetailRequest;
export type detailsOptions = Record<string, any>;

export type detailsResponse = Promise<
  defs.message.Response<
    defs.message.PageInfo<defs.message.QuerySmsReplyDetailResponse>
  >
>;

/**
 * @desc 查看触发明细
 */
export function request(
  body: detailsBody,
  options?: detailsOptions,
): detailsResponse {
  const host = getEnvHost();
  const url = host + '/message/bo/sms/reply/details';
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
