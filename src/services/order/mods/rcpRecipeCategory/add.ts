/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type addBody = defs.order.AddRecipeCategoryRequest;
export type addOptions = Record<string, any>;

export type addResponse = Promise<defs.order.Response<number>>;

/**
 * @desc 新增分类
 */
export function request(body: addBody, options?: addOptions): addResponse {
  const host = getEnvHost();
  const url = host + '/order/bo/recipe/category';
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
