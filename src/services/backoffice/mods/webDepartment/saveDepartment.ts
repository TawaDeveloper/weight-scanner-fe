/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type saveDepartmentBody = defs.backoffice.DepartmentDTO;
export type saveDepartmentOptions = Record<string, any>;

export type saveDepartmentResponse = Promise<defs.backoffice.Response>;

/**
 * @desc 新建部门
 */
export function request(
  body: saveDepartmentBody,
  options?: saveDepartmentOptions,
): saveDepartmentResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/bo/department/save';
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
