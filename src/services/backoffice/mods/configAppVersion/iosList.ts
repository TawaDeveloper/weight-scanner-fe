/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type iosListBody = defs.backoffice.QueryAppVersionRequest;
export type iosListOptions = Record<string, any>;

export type iosListResponse = Promise<
  defs.backoffice.Response<
    defs.backoffice.PageInfo<defs.backoffice.EditConfigAppVersionDTO>
  >
>;

/**
 * @desc 查询ios版本列表
 */
export function request(
  body: iosListBody,
  options?: iosListOptions,
): iosListResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/bo/config/ios/version/list';
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
