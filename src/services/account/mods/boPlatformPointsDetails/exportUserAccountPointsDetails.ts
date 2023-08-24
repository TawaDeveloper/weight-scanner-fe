/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type exportUserAccountPointsDetailsBody =
  defs.account.PlatformAccountPointsDetailsQueryDTO;
export type exportUserAccountPointsDetailsOptions = Record<string, any>;

export type exportUserAccountPointsDetailsResponse = Promise<any>;

/**
 * @desc 导出用户账户积分流水
 */
export function request(
  body: exportUserAccountPointsDetailsBody,
  options?: exportUserAccountPointsDetailsOptions,
): exportUserAccountPointsDetailsResponse {
  const host = getEnvHost();
  const url = host + '/account/bo/platform-points/details/user-account/export';
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
