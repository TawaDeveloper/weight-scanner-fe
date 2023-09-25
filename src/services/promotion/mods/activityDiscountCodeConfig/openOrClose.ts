/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type openOrClosePath = {
  /** id */
  id: number;
};
export type openOrCloseOptions = Record<string, any>;

export type openOrCloseResponse = Promise<defs.promotion.Response<void>>;

/**
 * @desc 上架或下架活动
 */
export function request(
  path: openOrClosePath,
  options?: openOrCloseOptions,
): openOrCloseResponse {
  const host = getEnvHost();
  const url =
    host +
    '/promotion/bo/discountCode/config/openOrClose/{id}'.replace(
      /\{[\w]+\}/,
      String(path.id),
    );
  const fetchOption = {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
