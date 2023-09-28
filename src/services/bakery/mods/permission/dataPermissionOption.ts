/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type dataPermissionOptionOptions = Record<string, any>;

export type dataPermissionOptionResponse = Promise<
  defs.bakery.Response<Array<defs.bakery.OptionVO>>
>;

/**
 * @desc 查询所有门店数据权限(选项)
 */
export function request(
  options?: dataPermissionOptionOptions,
): dataPermissionOptionResponse {
  const host = getEnvHost();
  const url = host + '/hot-deli-bakery/api/permissions/store/option';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
