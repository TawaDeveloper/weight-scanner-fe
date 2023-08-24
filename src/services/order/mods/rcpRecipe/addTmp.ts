/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type addTmpBody = defs.order.EditRecipeRequest;
export type addTmpOptions = Record<string, any>;

export type addTmpResponse = Promise<defs.order.Response<number>>;

/**
 * @desc 新增/修改 食谱为草稿状态 (不会校验参数非空状态)
 */
export function request(
  body: addTmpBody,
  options?: addTmpOptions,
): addTmpResponse {
  const host = getEnvHost();
  const url = host + '/order/bo/recipe/tmp';
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
