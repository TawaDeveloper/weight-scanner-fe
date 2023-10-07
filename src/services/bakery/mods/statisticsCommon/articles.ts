/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type articlesParam = {
  /** page */
  page: number;

  /** size */
  size: number;
};
export type articlesOptions = Record<string, any>;

export type articlesResponse = Promise<defs.bakery.Response<string>>;

/**
       * @desc 查询产品
查询产品用于下拉列表
       */
export function request(
  params: articlesParam,
  options?: articlesOptions,
): articlesResponse {
  const host = getEnvHost();
  const url = host + '/hot-deli-bakery/api/statistics/common/articles';
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
