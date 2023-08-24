/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type saveOperationPermissionBody = defs.backoffice.SaveOptPermissionDTO;
export type saveOperationPermissionOptions = Record<string, any>;

export type saveOperationPermissionResponse = Promise<defs.backoffice.Response>;

/**
 * @desc 保存操作权限
 */
export function request(
  body: saveOperationPermissionBody,
  options?: saveOperationPermissionOptions,
): saveOperationPermissionResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/bo/role/permission/operation/save';
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
