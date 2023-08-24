/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type removePath = {
  /** id */
  id: number;
};
export type removeOptions = Record<string, any>;

export type removeResponse = Promise<defs.warehouse.Response<void>>;

/**
 * @desc 删除拣货车或者篮子
 */
export function request(
  path: removePath,
  options?: removeOptions,
): removeResponse {
  const host = getEnvHost();
  const url =
    host +
    '/warehouse/bo/truckBasket/delete/{id}'.replace(
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
