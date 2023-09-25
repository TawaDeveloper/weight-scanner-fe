/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type updateBody = defs.backoffice.ConfigCustomerDto;
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
  const url = host + '/backoffice/bo/config/customer';
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
