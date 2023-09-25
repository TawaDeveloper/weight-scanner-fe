/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type addBody = defs.order.AddRecipeRequest;
export type addOptions = Record<string, any>;

export type addResponse = Promise<defs.order.Response<number>>;

/**
 * @desc 新增食谱
 */
export function request(body: addBody, options?: addOptions): addResponse {
  const host = getEnvHost();
  const url = host + '/order/bo/recipe';
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
