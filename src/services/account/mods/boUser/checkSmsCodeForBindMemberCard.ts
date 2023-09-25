/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type checkSmsCodeForBindMemberCardBody = defs.account.CheckSmsCodeDTO;
export type checkSmsCodeForBindMemberCardOptions = Record<string, any>;

export type checkSmsCodeForBindMemberCardResponse = Promise<
  defs.account.Response<defs.account.CheckCodeVO>
>;

/**
 * @desc 绑定会员卡-校验短信验证码
 */
export function request(
  body: checkSmsCodeForBindMemberCardBody,
  options?: checkSmsCodeForBindMemberCardOptions,
): checkSmsCodeForBindMemberCardResponse {
  const host = getEnvHost();
  const url = host + '/account/bo/user/card/bind/check/sms/code';
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
