/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getRoleOptionsOptions = Record<string, any>;

export type getRoleOptionsResponse = Promise<
  defs.backoffice.Response<Array<defs.backoffice.Option>>
>;

/**
 * @desc 查询角色列表（选项）
 */
export function request(
  options?: getRoleOptionsOptions,
): getRoleOptionsResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/bo/user/role/options';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
