/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type postAllArticleByRangeOptions = Record<string, any>;

export type postAllArticleByRangeResponse = Promise<boolean>;

/**
 * @desc postAllArticleByRange
 */
export function request(
  options?: postAllArticleByRangeOptions,
): postAllArticleByRangeResponse {
  const host = getEnvHost();
  const url = host + '/hot-deli-bakery/sap/post_article_byrange';
  const fetchOption = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
