/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getValidTimeTypeOptionsOptions = Record<string, any>;

export type getValidTimeTypeOptionsResponse = Promise<
  defs.backoffice.Response<Array<defs.backoffice.Option>>
>;

/**
 * @desc 查询角色有效期类型（选项）
 */
export function request(
  options?: getValidTimeTypeOptionsOptions,
): getValidTimeTypeOptionsResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/bo/role/validTimeType/options';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
