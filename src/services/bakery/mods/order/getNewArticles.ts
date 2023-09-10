/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getNewArticlesBody = defs.bakery.NewArticlesDTO;
export type getNewArticlesOptions = Record<string, any>;

export type getNewArticlesResponse = Promise<
  defs.bakery.Response<defs.bakery.IPage<defs.bakery.NewArticleItem>>
>;

/**
 * @desc 新建订单 - 查询产品列表
 */
export function request(
  params: getNewArticlesBody,
  options?: getNewArticlesOptions,
): getNewArticlesResponse {
  const host = getEnvHost();
  console.log(params, 'body')
  const url = host + '/hot-deli-bakery/api/order/new/articles/page';
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
