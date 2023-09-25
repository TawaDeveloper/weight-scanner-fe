/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type listBody = defs.order.QueryRecipeCategoryRequest;
export type listOptions = Record<string, any>;

export type listResponse = Promise<
  defs.order.Response<
    defs.order.PageInfo<defs.order.QueryRecipeCategoryResponse>
  >
>;

/**
 * @desc 分类列表
 */
export function request(body: listBody, options?: listOptions): listResponse {
  const host = getEnvHost();
  const url = host + '/order/bo/recipe/category/list';
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
