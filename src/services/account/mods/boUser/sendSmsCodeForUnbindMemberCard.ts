/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type sendSmsCodeForUnbindMemberCardBody = defs.account.PhoneDTO;
export type sendSmsCodeForUnbindMemberCardOptions = Record<string, any>;

export type sendSmsCodeForUnbindMemberCardResponse = Promise<
  defs.account.Response<defs.account.SendCodeVO>
>;

/**
 * @desc 会员卡解绑-发送短信验证码
 */
export function request(
  body: sendSmsCodeForUnbindMemberCardBody,
  options?: sendSmsCodeForUnbindMemberCardOptions,
): sendSmsCodeForUnbindMemberCardResponse {
  const host = getEnvHost();
  const url = host + '/account/bo/user/card/unbind/send/sms/code';
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
