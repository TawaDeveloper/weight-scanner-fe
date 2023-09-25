/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type pageQueryPointsAdjustBody = defs.account.PointsAdjustPageQueryDTO;
export type pageQueryPointsAdjustOptions = Record<string, any>;

export type pageQueryPointsAdjustResponse = Promise<
  defs.account.Response<defs.account.PageInfo<defs.account.PointsAdjustVO>>
>;

/**
 * @desc 分页查询积分调整列表
 */
export function request(
  body: pageQueryPointsAdjustBody,
  options?: pageQueryPointsAdjustOptions,
): pageQueryPointsAdjustResponse {
  const host = getEnvHost();
  const url = host + '/account/bo/points/adjust/page';
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
