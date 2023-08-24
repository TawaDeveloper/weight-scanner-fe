/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type iosAddBody = defs.backoffice.ConfigAppVersionDTO;
export type iosAddOptions = Record<string, any>;

export type iosAddResponse = Promise<defs.backoffice.Response<number>>;

/**
 * @desc 新增ios版本
 */
export function request(
  body: iosAddBody,
  options?: iosAddOptions,
): iosAddResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/bo/config/ios/version';
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
