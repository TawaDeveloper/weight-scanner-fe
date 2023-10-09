/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvTawaHost } from '@/utils/request';

export type listBody = defs.tawa.PageRoleRequest;
export type listOptions = Record<string, any>;

export type listResponse = Promise<
  defs.tawa.Response<defs.tawa.PageInfo<defs.tawa.PageRoleResponse>>
>;

/**
 * @desc 角色分页列表
 */
export function request(body: listBody, options?: listOptions): listResponse {
  const host = getEnvTawaHost();
  const url = host + '/tawa-api/perm/roles/list';
  const fetchOption = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
