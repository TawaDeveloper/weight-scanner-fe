/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getNewRefArticlesParam = {
  /** depId */
  depId: string;

  /** storeId */
  storeId: string;
};
export type getNewRefArticlesOptions = Record<string, any>;

export type getNewRefArticlesResponse = Promise<
  defs.bakery.Response<Array<defs.bakery.OrderNewRefArticle>>
>;

/**
 * @desc 新建订单 - 查询参考产品
 */
export function request(
  params: getNewRefArticlesParam,
  options?: getNewRefArticlesOptions,
): getNewRefArticlesResponse {
  const host = getEnvHost();
  const url = host + '/bakery/hot-deli-bakery/api/order/new/ref/articles';
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
