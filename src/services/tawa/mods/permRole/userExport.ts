/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type userExportBody = defs.tawa.PageRuleUserRequest;
export type userExportOptions = Record<string, any>;

export type userExportResponse = Promise<any>;

/**
 * @desc 查询关联人员-excel导出
 */
export function request(
  body: userExportBody,
  options?: userExportOptions,
): userExportResponse {
  const host = getEnvHost();
  const url = host + '/tawa/perm/roles/users/export';
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
