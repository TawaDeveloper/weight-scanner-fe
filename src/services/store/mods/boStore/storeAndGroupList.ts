/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type storeAndGroupListBody = defs.store.SelectStoreAndGroupCondition;
export type storeAndGroupListOptions = Record<string, any>;

export type storeAndGroupListResponse = Promise<
  defs.store.Response<Array<defs.store.StoreDetail>>
>;

/**
 * @desc 查询门店和门店分组列表
 */
export function request(
  body: storeAndGroupListBody,
  options?: storeAndGroupListOptions,
): storeAndGroupListResponse {
  const host = getEnvHost();
  const url = host + '/store/bo/store/storeAndGroup/list';
  const fetchOption = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
