/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getProcessingOrdersPath = {
  /** userId */
  userId: number;
};
export type getProcessingOrdersOptions = Record<string, any>;

export type getProcessingOrdersResponse = Promise<
  defs.account.Response<defs.account.OrderAndRefund>
>;

/**
 * @desc 查询用户账户下处理中的订单
 */
export function request(
  path: getProcessingOrdersPath,
  options?: getProcessingOrdersOptions,
): getProcessingOrdersResponse {
  const host = getEnvHost();
  const url =
    host +
    '/account/bo/user/processing/orders/{userId}'.replace(
      /\{[\w]+\}/,
      String(path.userId),
    );
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
