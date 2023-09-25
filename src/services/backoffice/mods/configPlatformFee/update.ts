/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type updateBody = Array<defs.backoffice.ConfigPlatformFeeDto>;
export type updateOptions = Record<string, any>;

export type updateResponse = Promise<defs.backoffice.Response<boolean>>;

/**
 * @desc 编辑配置
 */
export function request(
  body: updateBody,
  options?: updateOptions,
): updateResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/bo/config/platformFee';
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
