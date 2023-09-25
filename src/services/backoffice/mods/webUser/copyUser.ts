/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type copyUserParam = {
  /** id */
  id: number;
};
export type copyUserOptions = Record<string, any>;

export type copyUserResponse = Promise<
  defs.backoffice.Response<defs.backoffice.CopyUserVO>
>;

/**
 * @desc 查询复制用户
 */
export function request(
  params: copyUserParam,
  options?: copyUserOptions,
): copyUserResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/bo/user/copy/query';
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
