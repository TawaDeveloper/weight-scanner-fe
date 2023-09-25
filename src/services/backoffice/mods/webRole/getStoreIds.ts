/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getStoreIdsParam = {
  /** roleId */
  roleId: number;
};
export type getStoreIdsOptions = Record<string, any>;

export type getStoreIdsResponse = Promise<
  defs.backoffice.Response<Array<number>>
>;

/**
 * @desc 数据权限 - 查询角色门店
 */
export function request(
  params: getStoreIdsParam,
  options?: getStoreIdsOptions,
): getStoreIdsResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/bo/role/permission/data/store/list';
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
