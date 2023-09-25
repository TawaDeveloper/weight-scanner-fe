/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type pageQueryBody = defs.account.PointsDetailsLocPageQueryDTO;
export type pageQueryOptions = Record<string, any>;

export type pageQueryResponse = Promise<
  defs.account.Response<defs.account.PageInfo<defs.account.PointsDetailsLocVO>>
>;

/**
 * @desc 分页查询积分明细
 */
export function request(
  body: pageQueryBody,
  options?: pageQueryOptions,
): pageQueryResponse {
  const host = getEnvHost();
  const url = host + '/account/bo/points/details/loc/page';
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
