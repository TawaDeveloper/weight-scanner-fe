/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type temporaryPointsRechargeParam = {
  /** amount */
  amount: number;
};
export type temporaryPointsRechargePath = {
  /** userId */
  userId: number;
};
export type temporaryPointsRechargeOptions = Record<string, any>;

export type temporaryPointsRechargeResponse = Promise<
  defs.account.Response<number>
>;

/**
 * @desc 临时积分充值接口（测试用）
 */
export function request(
  params: temporaryPointsRechargeParam,
  path: temporaryPointsRechargePath,
  options?: temporaryPointsRechargeOptions,
): temporaryPointsRechargeResponse {
  const host = getEnvHost();
  const url =
    host +
    '/account/bo/points/details/temporary/recharge/{userId}'.replace(
      /\{[\w]+\}/,
      String(path.userId),
    );
  const fetchOption = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    params,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
