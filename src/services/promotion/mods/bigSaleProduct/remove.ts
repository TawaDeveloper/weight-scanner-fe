/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type removePath = {
  /** id */
  id: number;
};
export type removeOptions = Record<string, any>;

export type removeResponse = Promise<defs.promotion.Response<void>>;

/**
 * @desc 删除活动商品
 */
export function request(
  path: removePath,
  options?: removeOptions,
): removeResponse {
  const host = getEnvHost();
  const url =
    host +
    '/promotion/bo/saleProduct/delete/{id}'.replace(
      /\{[\w]+\}/,
      String(path.id),
    );
  const fetchOption = {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
