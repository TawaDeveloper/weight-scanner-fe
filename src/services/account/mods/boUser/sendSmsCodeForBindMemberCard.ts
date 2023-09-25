/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type sendSmsCodeForBindMemberCardBody = defs.account.PhoneDTO;
export type sendSmsCodeForBindMemberCardOptions = Record<string, any>;

export type sendSmsCodeForBindMemberCardResponse = Promise<
  defs.account.Response<defs.account.SendCodeVO>
>;

/**
 * @desc 绑定会员卡-发送短信验证码
 */
export function request(
  body: sendSmsCodeForBindMemberCardBody,
  options?: sendSmsCodeForBindMemberCardOptions,
): sendSmsCodeForBindMemberCardResponse {
  const host = getEnvHost();
  const url = host + '/account/bo/user/card/bind/send/sms/code';
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
