/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type operatePointsAdjustPassBody = defs.account.PointsAdjustOperateDTO;
export type operatePointsAdjustPassOptions = Record<string, any>;

export type operatePointsAdjustPassResponse = Promise<
  defs.account.Response<string>
>;

/**
 * @desc 审核/通过
 */
export function request(
  body: operatePointsAdjustPassBody,
  options?: operatePointsAdjustPassOptions,
): operatePointsAdjustPassResponse {
  const host = getEnvHost();
  const url = host + '/account/bo/points/adjust/operate/pass';
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
