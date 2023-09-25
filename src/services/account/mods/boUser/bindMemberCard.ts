/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type bindMemberCardBody = defs.account.BindMemberCardCommandDTO;
export type bindMemberCardOptions = Record<string, any>;

export type bindMemberCardResponse = Promise<defs.account.Response<string>>;

/**
 * @desc 绑定会员卡
 */
export function request(
  body: bindMemberCardBody,
  options?: bindMemberCardOptions,
): bindMemberCardResponse {
  const host = getEnvHost();
  const url = host + '/account/bo/user/card/bind';
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
