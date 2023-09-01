/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type storeTreeOptions = Record<string, any>;

export type storeTreeResponse = Promise<
  defs.bakery.Response<Array<defs.bakery.StoreGroupTree>>
>;

/**
       * @desc 查询门店树状结构
查询门店树状结构
       */
export function request(options?: storeTreeOptions): storeTreeResponse {
  const host = getEnvHost();
  const url =
    host + '/bakery/hot-deli-bakery/api/statistical/common/store/tree';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
