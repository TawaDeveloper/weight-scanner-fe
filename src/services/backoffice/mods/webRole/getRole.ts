/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getRoleParam = {
  /** id */
  id: number;
};
export type getRoleOptions = Record<string, any>;

export type getRoleResponse = Promise<
  defs.backoffice.Response<defs.backoffice.Role>
>;

/**
 * @desc 查询角色
 */
export function request(
  params: getRoleParam,
  options?: getRoleOptions,
): getRoleResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/bo/role/query';
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
