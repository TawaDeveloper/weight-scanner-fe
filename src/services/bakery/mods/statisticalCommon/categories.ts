/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type categoriesParam = {
  /** keyword */
  keyword?: string;
};
export type categoriesOptions = Record<string, any>;

export type categoriesResponse = Promise<
  defs.bakery.Response<Array<defs.bakery.CategoryOption>>
>;

/**
       * @desc 查询类别
查询类别用于下拉列表
       */
export function request(
  params: categoriesParam,
  options?: categoriesOptions,
): categoriesResponse {
  const host = getEnvHost();
  const url =
    host + '/bakery/hot-deli-bakery/api/statistical/common/categories';
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
