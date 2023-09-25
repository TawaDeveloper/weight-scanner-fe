/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type registerSmsCodeBody = defs.account.CheckCodeInviteDTO;
export type registerSmsCodeOptions = Record<string, any>;

export type registerSmsCodeResponse = Promise<
  defs.account.Response<defs.account.LoginInfo>
>;

/**
 * @desc 注册（短信验证码注册）
 */
export function request(
  body: registerSmsCodeBody,
  options?: registerSmsCodeOptions,
): registerSmsCodeResponse {
  const host = getEnvHost();
  const url = host + '/account/h5/permission/register/sms/code';
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
