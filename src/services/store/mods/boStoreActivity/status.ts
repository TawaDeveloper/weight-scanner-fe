/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type statusParam = {
  /** id */
  id: number;
};
export type statusOptions = Record<string, any>;

export type statusResponse = Promise<defs.store.Response<void>>;

/**
 * @desc 上架或下架活动
 */
export function request(
  params: statusParam,
  options?: statusOptions,
): statusResponse {
  const host = getEnvHost();
  const url = host + '/store/bo/store/activity/status';
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
