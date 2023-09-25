/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type updateDepartmentBody = defs.backoffice.UpdateDepartmentDTO;
export type updateDepartmentOptions = Record<string, any>;

export type updateDepartmentResponse = Promise<defs.backoffice.Response>;

/**
 * @desc 修改部门
 */
export function request(
  body: updateDepartmentBody,
  options?: updateDepartmentOptions,
): updateDepartmentResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/bo/department/update';
  const fetchOption = {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
