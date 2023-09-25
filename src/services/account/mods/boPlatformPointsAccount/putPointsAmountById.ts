/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type putPointsAmountByIdParam = {
  /** pointsAmount */
  pointsAmount: number;
};
export type putPointsAmountByIdPath = {
  /** id */
  id: number;
};
export type putPointsAmountByIdOptions = Record<string, any>;

export type putPointsAmountByIdResponse = Promise<
  defs.account.Response<string>
>;

/**
 * @desc 金额变动
 */
export function request(
  params: putPointsAmountByIdParam,
  path: putPointsAmountByIdPath,
  options?: putPointsAmountByIdOptions,
): putPointsAmountByIdResponse {
  const host = getEnvHost();
  const url =
    host +
    '/account/bo/platform-points/account/points/amount/{id}'.replace(
      /\{[\w]+\}/,
      String(path.id),
    );
  const fetchOption = {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
    },
    params,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
