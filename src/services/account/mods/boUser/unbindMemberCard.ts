/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type unbindMemberCardBody = defs.account.UnbindMemberCardCommandDTO;
export type unbindMemberCardOptions = Record<string, any>;

export type unbindMemberCardResponse = Promise<defs.account.Response<string>>;

/**
 * @desc 会员卡解绑
 */
export function request(
  body: unbindMemberCardBody,
  options?: unbindMemberCardOptions,
): unbindMemberCardResponse {
  const host = getEnvHost();
  const url = host + '/account/bo/user/card/unbind';
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
