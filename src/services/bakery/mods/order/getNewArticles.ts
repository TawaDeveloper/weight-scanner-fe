/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getNewArticlesParam = {
  /** dep */
  dep: string;

  /** storeId */
  storeId: string;
};
export type getNewArticlesOptions = Record<string, any>;

export type getNewArticlesResponse = Promise<
  defs.bakery.Response<defs.bakery.OrderNewArticlesVO>
>;

/**
 * @desc 新建订单 - 查询产品分类
 */
export function request(
  params: getNewArticlesParam,
  options?: getNewArticlesOptions,
): getNewArticlesResponse {
  const host = getEnvHost();
  const url = host + '/bakery/hot-deli-bakery/order/new/articles';
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
