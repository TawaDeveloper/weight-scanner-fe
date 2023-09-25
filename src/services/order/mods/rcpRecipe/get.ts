/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getPath = {
  /** id */
  id: number;
};
export type getOptions = Record<string, any>;

export type getResponse = Promise<
  defs.order.Response<defs.order.AddRecipeRequest>
>;

/**
 * @desc 食谱详情
 */
export function request(path: getPath, options?: getOptions): getResponse {
  const host = getEnvHost();
  const url =
    host + '/order/bo/recipe/{id}'.replace(/\{[\w]+\}/, String(path.id));
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
