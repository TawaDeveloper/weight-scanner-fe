/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type checkSmsCodeForUnbindMemberCardBody = defs.account.CheckSmsCodeDTO;
export type checkSmsCodeForUnbindMemberCardOptions = Record<string, any>;

export type checkSmsCodeForUnbindMemberCardResponse = Promise<
  defs.account.Response<defs.account.CheckCodeVO>
>;

/**
 * @desc 会员卡解绑-校验短信验证码
 */
export function request(
  body: checkSmsCodeForUnbindMemberCardBody,
  options?: checkSmsCodeForUnbindMemberCardOptions,
): checkSmsCodeForUnbindMemberCardResponse {
  const host = getEnvHost();
  const url = host + '/account/bo/user/card/unbind/check/sms/code';
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
