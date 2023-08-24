/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type pageQueryPointsDetailsBody = defs.account.PointsDetailsPageQueryDTO;
export type pageQueryPointsDetailsOptions = Record<string, any>;

export type pageQueryPointsDetailsResponse = Promise<
  defs.account.Response<defs.account.PageInfo<defs.account.PointsDetailsVO>>
>;

/**
 * @desc 分页查询积分明细
 */
export function request(
  body: pageQueryPointsDetailsBody,
  options?: pageQueryPointsDetailsOptions,
): pageQueryPointsDetailsResponse {
  const host = getEnvHost();
  const url = host + '/account/bo/points/details/page';
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
