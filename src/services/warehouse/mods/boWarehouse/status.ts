/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type statusPath = {
  /** id */
  id: number;
};
export type statusOptions = Record<string, any>;

export type statusResponse = Promise<defs.warehouse.Response<void>>;

/**
 * @desc 启用或禁用仓库
 */
export function request(
  path: statusPath,
  options?: statusOptions,
): statusResponse {
  const host = getEnvHost();
  const url =
    host +
    '/warehouse/bo/warehouse/status/{id}'.replace(/\{[\w]+\}/, String(path.id));
  const fetchOption = {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
