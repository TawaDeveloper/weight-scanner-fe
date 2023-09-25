/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getUserStatusOptions = Record<string, any>;

export type getUserStatusResponse = Promise<
  defs.backoffice.Response<Array<defs.backoffice.Option>>
>;

/**
 * @desc 查询用户状态（选项）
 */
export function request(options?: getUserStatusOptions): getUserStatusResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/bo/user/status/options';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
