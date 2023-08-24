/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getUserParam = {
  /** id */
  id: number;
};
export type getUserOptions = Record<string, any>;

export type getUserResponse = Promise<
  defs.backoffice.Response<defs.backoffice.User>
>;

/**
 * @desc 查询用户账号
 */
export function request(
  params: getUserParam,
  options?: getUserOptions,
): getUserResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/bo/user/query';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    params,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
