/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getDataPermissionTypeOptionsOptions = Record<string, any>;

export type getDataPermissionTypeOptionsResponse = Promise<
  defs.backoffice.Response<Array<defs.backoffice.Option>>
>;

/**
 * @desc 数据权限 - 查询类型列表（选项）
 */
export function request(
  options?: getDataPermissionTypeOptionsOptions,
): getDataPermissionTypeOptionsResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/bo/role/permission/data/type/options';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
