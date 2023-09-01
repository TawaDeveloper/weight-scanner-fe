/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type updateSalesGoalBody = defs.bakery.UpdateSalesGoalDTO;
export type updateSalesGoalOptions = Record<string, any>;

export type updateSalesGoalResponse = Promise<defs.bakery.Response<void>>;

/**
 * @desc 编辑目标
 */
export function request(
  body: updateSalesGoalBody,
  options?: updateSalesGoalOptions,
): updateSalesGoalResponse {
  const host = getEnvHost();
  const url = host + '/bakery/hot-deli-bakery/api/sales/goal/update';
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
