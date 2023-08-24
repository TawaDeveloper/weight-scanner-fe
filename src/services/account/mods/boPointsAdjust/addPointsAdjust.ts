/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type addPointsAdjustBody = defs.account.PointsAdjustAddDTO;
export type addPointsAdjustOptions = Record<string, any>;

export type addPointsAdjustResponse = Promise<defs.account.Response<string>>;

/**
 * @desc 手动调整积分
 */
export function request(
  body: addPointsAdjustBody,
  options?: addPointsAdjustOptions,
): addPointsAdjustResponse {
  const host = getEnvHost();
  const url = host + '/account/bo/points/adjust/add';
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
