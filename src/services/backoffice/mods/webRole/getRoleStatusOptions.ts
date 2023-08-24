/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getRoleStatusOptionsOptions = Record<string, any>;

export type getRoleStatusOptionsResponse = Promise<
  defs.backoffice.Response<Array<defs.backoffice.Option>>
>;

/**
 * @desc 查询角色状态（选项）
 */
export function request(
  options?: getRoleStatusOptionsOptions,
): getRoleStatusOptionsResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/bo/role/status/options';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
