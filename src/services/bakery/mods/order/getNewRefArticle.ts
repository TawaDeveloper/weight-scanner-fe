/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getNewRefArticleBody = defs.bakery.ArticleRefDTO;
export type getNewRefArticleOptions = Record<string, any>;

export type getNewRefArticleResponse = Promise<
  defs.bakery.Response<Array<defs.bakery.OrderNewRefArticle>>
>;

/**
 * @desc 新建订单 - 查询添加产品
 */
export function request(
  body: getNewRefArticleBody,
  options?: getNewRefArticleOptions,
): getNewRefArticleResponse {
  const host = getEnvHost();
  const url = host + '/hot-deli-bakery/api/order/new/ref/article';
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
