/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type pageQueryUserAccountPointsDetailsBody =
  defs.account.PlatformAccountPointsDetailsPageQueryDTO;
export type pageQueryUserAccountPointsDetailsOptions = Record<string, any>;

export type pageQueryUserAccountPointsDetailsResponse = Promise<
  defs.account.Response<
    defs.account.PageInfo<defs.account.PlatformAccountPointsDetailsVO>
  >
>;

/**
 * @desc 分页查询用户账户积分流水
 */
export function request(
  body: pageQueryUserAccountPointsDetailsBody,
  options?: pageQueryUserAccountPointsDetailsOptions,
): pageQueryUserAccountPointsDetailsResponse {
  const host = getEnvHost();
  const url = host + '/account/bo/platform-points/details/user-account/page';
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
