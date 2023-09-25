/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type pageQueryPlatformAccountPointsDetailsBody =
  defs.account.PlatformAccountPointsDetailsPageQueryDTO;
export type pageQueryPlatformAccountPointsDetailsOptions = Record<string, any>;

export type pageQueryPlatformAccountPointsDetailsResponse = Promise<
  defs.account.Response<
    defs.account.PageInfo<defs.account.PlatformAccountPointsDetailsVO>
  >
>;

/**
 * @desc 分页查询平台账户积分流水
 */
export function request(
  body: pageQueryPlatformAccountPointsDetailsBody,
  options?: pageQueryPlatformAccountPointsDetailsOptions,
): pageQueryPlatformAccountPointsDetailsResponse {
  const host = getEnvHost();
  const url =
    host + '/account/bo/platform-points/details/platform-account/page';
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
