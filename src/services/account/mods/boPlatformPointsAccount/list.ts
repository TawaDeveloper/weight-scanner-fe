/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type listParam = {
  /** status */
  status?: 'ACTIVATED';
};
export type listOptions = Record<string, any>;

export type listResponse = Promise<
  defs.account.Response<Array<defs.account.PlatformPointsAccountVO>>
>;

/**
 * @desc 查询平台积分账户列表
 */
export function request(
  params: listParam,
  options?: listOptions,
): listResponse {
  const host = getEnvHost();
  const url = host + '/account/bo/platform-points/account/list';
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
