/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type iosUpdateBody = defs.backoffice.EditConfigAppVersionDTO;
export type iosUpdateOptions = Record<string, any>;

export type iosUpdateResponse = Promise<defs.backoffice.Response<boolean>>;

/**
 * @desc 编辑ios版本
 */
export function request(
  body: iosUpdateBody,
  options?: iosUpdateOptions,
): iosUpdateResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/bo/config/ios/version';
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
