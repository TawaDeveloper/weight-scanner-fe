/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getOptions = Record<string, any>;

export type getResponse = Promise<
  defs.backoffice.Response<defs.backoffice.ConfigCustomerDto>
>;

/**
 * @desc 查询配置
 */
export function request(options?: getOptions): getResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/bo/config/customer';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
