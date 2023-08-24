/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type editBody = defs.order.EditRecipeRequest;
export type editOptions = Record<string, any>;

export type editResponse = Promise<defs.order.Response<boolean>>;

/**
 * @desc 编辑食谱
 */
export function request(body: editBody, options?: editOptions): editResponse {
  const host = getEnvHost();
  const url = host + '/order/bo/recipe';
  const fetchOption = {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
