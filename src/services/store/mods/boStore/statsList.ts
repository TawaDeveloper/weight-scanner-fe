/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type statsListOptions = Record<string, any>;

export type statsListResponse = Promise<
  defs.store.Response<Array<defs.store.State>>
>;

/**
 * @desc 查询州列表
 */
export function request(options?: statsListOptions): statsListResponse {
  const host = getEnvHost();
  const url = host + '/store/bo/store/state/list';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
