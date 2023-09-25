/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type exportPlatformAccountPointsDetailsBody =
  defs.account.PlatformAccountPointsDetailsQueryDTO;
export type exportPlatformAccountPointsDetailsOptions = Record<string, any>;

export type exportPlatformAccountPointsDetailsResponse = Promise<any>;

/**
 * @desc 导出平台账户积分流水
 */
export function request(
  body: exportPlatformAccountPointsDetailsBody,
  options?: exportPlatformAccountPointsDetailsOptions,
): exportPlatformAccountPointsDetailsResponse {
  const host = getEnvHost();
  const url =
    host + '/account/bo/platform-points/details/platform-account/export';
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
