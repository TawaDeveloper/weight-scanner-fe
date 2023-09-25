/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type listParam = {
  /** search */
  search?: string;
};
export type listOptions = Record<string, any>;

export type listResponse = Promise<
  defs.backoffice.Response<Array<defs.backoffice.ConfigPlatformFeeDto>>
>;

/**
 * @desc 查询配置
 */
export function request(
  params: listParam,
  options?: listOptions,
): listResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/bo/config/platformFee';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    params,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
