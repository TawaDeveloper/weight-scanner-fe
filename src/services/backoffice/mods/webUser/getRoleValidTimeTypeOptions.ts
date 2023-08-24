/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getRoleValidTimeTypeOptionsOptions = Record<string, any>;

export type getRoleValidTimeTypeOptionsResponse = Promise<
  defs.backoffice.Response<Array<defs.backoffice.Option>>
>;

/**
 * @desc 查询有效期类型（选项）
 */
export function request(
  options?: getRoleValidTimeTypeOptionsOptions,
): getRoleValidTimeTypeOptionsResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/bo/user/role/validTimeType/options';
  const fetchOption = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
