/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getBizModuleOptionsOptions = Record<string, any>;

export type getBizModuleOptionsResponse = Promise<
  defs.backoffice.Response<Array<defs.backoffice.ModuleOption>>
>;

/**
 * @desc 数据权限 - 查询业务列表（选项）
 */
export function request(
  options?: getBizModuleOptionsOptions,
): getBizModuleOptionsResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/bo/role/permission/data/bizModule/options';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
