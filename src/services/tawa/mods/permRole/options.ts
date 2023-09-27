/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type optionsParam = {
  /** 角色名 */
  name?: string;
};
export type optionsOptions = Record<string, any>;

export type optionsResponse = Promise<
  defs.tawa.Response<Array<defs.tawa.QueryRoleOption>>
>;

/**
 * @desc 查询所有的角色选项
 */
export function request(
  params: optionsParam,
  options?: optionsOptions,
): optionsResponse {
  const host = getEnvHost();
  const url = host + '/tawa/perm/roles/options';
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
