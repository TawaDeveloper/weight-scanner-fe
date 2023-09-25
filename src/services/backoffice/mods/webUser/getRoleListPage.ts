/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getRoleListPageBody = defs.backoffice.ListUserRoleDTO;
export type getRoleListPageOptions = Record<string, any>;

export type getRoleListPageResponse = Promise<
  defs.backoffice.Response<defs.backoffice.PageInfo<defs.backoffice.UserRole>>
>;

/**
 * @desc 查看角色分页列表
 */
export function request(
  body: getRoleListPageBody,
  options?: getRoleListPageOptions,
): getRoleListPageResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/bo/user/role/list/page';
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
