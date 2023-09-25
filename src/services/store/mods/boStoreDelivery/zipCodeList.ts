/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type zipCodeListParam = {
  /** storeId */
  storeId: number;

  /** zipCode */
  zipCode?: string;
};
export type zipCodeListOptions = Record<string, any>;

export type zipCodeListResponse = Promise<defs.store.Response<Set<string>>>;

/**
 * @desc 查询 ZipCode 列表
 */
export function request(
  params: zipCodeListParam,
  options?: zipCodeListOptions,
): zipCodeListResponse {
  const host = getEnvHost();
  const url = host + '/store/bo/store/delivery/zipCode/list';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    params,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
