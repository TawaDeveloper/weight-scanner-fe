/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type createSalesGoalBody = defs.bakery.NewSalesGoalDTO;
export type createSalesGoalOptions = Record<string, any>;

export type createSalesGoalResponse = Promise<defs.bakery.Response<void>>;

/**
 * @desc 新建目标
 */
export function request(
  body: createSalesGoalBody,
  options?: createSalesGoalOptions,
): createSalesGoalResponse {
  const host = getEnvHost();
  const url = host + '/bakery/hot-deli-bakery/api/sales/goal/create';
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
