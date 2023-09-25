/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type suggestBody = defs.account.FeedbackSuggestDTO;
export type suggestOptions = Record<string, any>;

export type suggestResponse = Promise<defs.account.Response<string>>;

/**
 * @desc 填写处理意见
 */
export function request(
  body: suggestBody,
  options?: suggestOptions,
): suggestResponse {
  const host = getEnvHost();
  const url = host + '/account/bo/feedback/suggest';
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
