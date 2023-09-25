/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getDepartmentOptionsOptions = Record<string, any>;

export type getDepartmentOptionsResponse = Promise<
  defs.backoffice.Response<Array<defs.backoffice.DepartmentTreeItem>>
>;

/**
 * @desc 查询部门列表（选项）
 */
export function request(
  options?: getDepartmentOptionsOptions,
): getDepartmentOptionsResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/bo/user/department/options';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
