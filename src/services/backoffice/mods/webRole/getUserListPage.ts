/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getUserListPageBody = defs.backoffice.ListRoleUserDTO;
export type getUserListPageOptions = Record<string, any>;

export type getUserListPageResponse = Promise<
  defs.backoffice.Response<defs.backoffice.PageInfo<defs.backoffice.RoleUser>>
>;

/**
 * @desc 关联人员 - 查询用户分页列表
 */
export function request(
  body: getUserListPageBody,
  options?: getUserListPageOptions,
): getUserListPageResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/bo/role/user/list/page';
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
