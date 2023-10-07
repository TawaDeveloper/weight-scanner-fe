/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type categoriesParam = {
  /** keyword */
  keyword?: string;

  /** page */
  page?: number;

  /** size */
  size?: number;
};
export type categoriesOptions = Record<string, any>;

export type categoriesResponse = Promise<
  defs.bakery.Response<defs.bakery.IPage<defs.bakery.CategoryOption>>
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
  const url = host + '/hot-deli-bakery/api/statistics/common/categories';
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
