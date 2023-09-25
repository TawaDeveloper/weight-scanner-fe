/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type optionsOptions = Record<string, any>;

export type optionsResponse = Promise<
  defs.order.Response<Array<defs.order.QueryRecipeCategoryOptionResponse>>
>;

/**
 * @desc 分类列表(下拉选项)
 */
export function request(options?: optionsOptions): optionsResponse {
  const host = getEnvHost();
  const url = host + '/order/bo/recipe/category/options';
  const fetchOption = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
