/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type resetPwdBody = defs.backoffice.ResetPwdDTO;
export type resetPwdOptions = Record<string, any>;

export type resetPwdResponse = Promise<defs.backoffice.Response>;

/**
 * @desc 重置用户密码
 */
export function request(
  body: resetPwdBody,
  options?: resetPwdOptions,
): resetPwdResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/bo/user/password/reset';
  const fetchOption = {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
