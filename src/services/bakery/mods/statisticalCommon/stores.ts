/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type storesParam = {
  /** keyword */
  keyword?: string;
};
export type storesOptions = Record<string, any>;

export type storesResponse = Promise<
  defs.bakery.Response<Array<defs.bakery.StoreVo>>
>;

/**
       * @desc 查询门店
查询门店名称用于下拉列表
       */
export function request(
  params: storesParam,
  options?: storesOptions,
): storesResponse {
  const host = getEnvHost();
  const url = host + '/bakery/hot-deli-bakery/api/statistical/common/stores';
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
