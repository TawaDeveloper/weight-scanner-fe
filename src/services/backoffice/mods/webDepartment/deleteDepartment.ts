/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type deleteDepartmentParam = {
  /** id */
  id: number;
};
export type deleteDepartmentOptions = Record<string, any>;

export type deleteDepartmentResponse = Promise<defs.backoffice.Response>;

/**
 * @desc 删除部门
 */
export function request(
  params: deleteDepartmentParam,
  options?: deleteDepartmentOptions,
): deleteDepartmentResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/bo/department/delete';
  const fetchOption = {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
    },
    params,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
