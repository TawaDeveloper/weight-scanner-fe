/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type operatePointsAdjustRejectBody = defs.account.PointsAdjustOperateDTO;
export type operatePointsAdjustRejectOptions = Record<string, any>;

export type operatePointsAdjustRejectResponse = Promise<
  defs.account.Response<string>
>;

/**
 * @desc 审核/拒绝
 */
export function request(
  body: operatePointsAdjustRejectBody,
  options?: operatePointsAdjustRejectOptions,
): operatePointsAdjustRejectResponse {
  const host = getEnvHost();
  const url = host + '/account/bo/points/adjust/operate/reject';
  const fetchOption = {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
