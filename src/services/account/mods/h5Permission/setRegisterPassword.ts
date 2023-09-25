/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type setRegisterPasswordBody = defs.account.SetPasswordDTO;
export type setRegisterPasswordOptions = Record<string, any>;

export type setRegisterPasswordResponse = Promise<
  defs.account.Response<string>
>;

/**
 * @desc 注册 - 设置密码
 */
export function request(
  body: setRegisterPasswordBody,
  options?: setRegisterPasswordOptions,
): setRegisterPasswordResponse {
  const host = getEnvHost();
  const url = host + '/account/h5/permission/register/set/password';
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
