/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getAppOptionsOptions = Record<string, any>;

export type getAppOptionsResponse = Promise<
  defs.backoffice.Response<Array<defs.backoffice.Option>>
>;

/**
 * @desc 操作权限 - 查询应用列表（选项）
 */
export function request(options?: getAppOptionsOptions): getAppOptionsResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/bo/role/app/options';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
