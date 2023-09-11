/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getSalesGoalOptLogsParam = {
  /** id */
  id: number;
};
export type getSalesGoalOptLogsOptions = Record<string, any>;

export type getSalesGoalOptLogsResponse = Promise<
  defs.bakery.Response<Array<defs.bakery.SalesGoalOptLog>>
>;

/**
 * @desc 查询操作日志
 */
export function request(
  params: getSalesGoalOptLogsParam,
  options?: getSalesGoalOptLogsOptions,
): getSalesGoalOptLogsResponse {
  const host = getEnvHost();
  const url = host + '/bakery/hot-deli-bakery/api/sales/goal/opt/logs';
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
