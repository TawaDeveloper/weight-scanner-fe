/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type exportPointsDetailsBody = defs.account.PointsDetailsLocQueryDTO;
export type exportPointsDetailsOptions = Record<string, any>;

export type exportPointsDetailsResponse = Promise<any>;

/**
 * @desc 导出积分明细
 */
export function request(
  body: exportPointsDetailsBody,
  options?: exportPointsDetailsOptions,
): exportPointsDetailsResponse {
  const host = getEnvHost();
  const url = host + '/account/bo/points/details/loc/export';
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
