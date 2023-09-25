/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getDepartmentTreeOptions = Record<string, any>;

export type getDepartmentTreeResponse = Promise<
  defs.backoffice.Response<Array<defs.backoffice.DepartmentTreeItem>>
>;

/**
 * @desc 查询部门树
 */
export function request(
  options?: getDepartmentTreeOptions,
): getDepartmentTreeResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/bo/department/tree';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
