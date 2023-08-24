/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type updatePwdBody = defs.backoffice.UpdatePwdDTO;
export type updatePwdOptions = Record<string, any>;

export type updatePwdResponse = Promise<defs.backoffice.Response>;

/**
 * @desc 修改密码
 */
export function request(
  body: updatePwdBody,
  options?: updatePwdOptions,
): updatePwdResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/bo/admin/password/update';
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
