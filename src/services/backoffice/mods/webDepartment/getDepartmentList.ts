/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getDepartmentListBody = defs.backoffice.ListDepartmentDTO;
export type getDepartmentListOptions = Record<string, any>;

export type getDepartmentListResponse = Promise<
  defs.backoffice.Response<defs.backoffice.PageInfo<defs.backoffice.Department>>
>;

/**
 * @desc 查询部门分页列表
 */
export function request(
  body: getDepartmentListBody,
  options?: getDepartmentListOptions,
): getDepartmentListResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/bo/department/list/page';
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
