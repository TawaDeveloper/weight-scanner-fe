/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type statusParam = {
  /** id */
  id: number;

  /** status */
  status: number;
};
export type statusOptions = Record<string, any>;

export type statusResponse = Promise<defs.store.Response<void>>;

/**
 * @desc 启用或禁用门店
 */
export function request(
  params: statusParam,
  options?: statusOptions,
): statusResponse {
  const host = getEnvHost();
  const url = host + '/store/bo/store/status';
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
