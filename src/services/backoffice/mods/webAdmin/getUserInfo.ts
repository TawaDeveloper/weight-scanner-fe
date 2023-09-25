/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getUserInfoOptions = Record<string, any>;

export type getUserInfoResponse = Promise<
  defs.backoffice.Response<defs.backoffice.Permission>
>;

/**
 * @desc 查询权限
 */
export function request(options?: getUserInfoOptions): getUserInfoResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/bo/admin/permission';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
