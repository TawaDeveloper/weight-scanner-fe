/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type treeParam = {
  /** appId */
  appId: number;
};
export type treeOptions = Record<string, any>;

export type treeResponse = Promise<
  defs.backoffice.Response<Array<defs.backoffice.MenuDto>>
>;

/**
 * @desc 查询菜单列表
 */
export function request(
  params: treeParam,
  options?: treeOptions,
): treeResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/bo/menu/tree';
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
