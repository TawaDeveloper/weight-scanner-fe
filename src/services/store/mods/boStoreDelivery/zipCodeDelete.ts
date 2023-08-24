/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type zipCodeDeleteParam = {
  /** storeId */
  storeId: number;

  /** zipCodes */
  zipCodes: Array<string>;
};
export type zipCodeDeleteOptions = Record<string, any>;

export type zipCodeDeleteResponse = Promise<defs.store.Response<void>>;

/**
 * @desc 移除 ZipCode 设置
 */
export function request(
  params: zipCodeDeleteParam,
  options?: zipCodeDeleteOptions,
): zipCodeDeleteResponse {
  const host = getEnvHost();
  const url = host + '/store/bo/store/delivery/zipCode/delete';
  const fetchOption = {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
    },
    params,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
