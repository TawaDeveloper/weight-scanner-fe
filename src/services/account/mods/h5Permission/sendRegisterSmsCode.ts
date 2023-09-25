/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type sendRegisterSmsCodeBody = defs.account.PhoneDTO;
export type sendRegisterSmsCodeOptions = Record<string, any>;

export type sendRegisterSmsCodeResponse = Promise<
  defs.account.Response<defs.account.SendCodeVO>
>;

/**
 * @desc 注册（发送短信验证码）
 */
export function request(
  body: sendRegisterSmsCodeBody,
  options?: sendRegisterSmsCodeOptions,
): sendRegisterSmsCodeResponse {
  const host = getEnvHost();
  const url = host + '/account/h5/permission/register/send/sms/code';
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
