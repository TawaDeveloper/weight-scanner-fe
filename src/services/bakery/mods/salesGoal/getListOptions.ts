/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getListOptionsOptions = Record<string, any>;

export type getListOptionsResponse = Promise<
  defs.bakery.Response<defs.bakery.SalesGoalListOptionVO>
>;

/**
 * @desc 查询条件选项
 */
export function request(
  options?: getListOptionsOptions,
): getListOptionsResponse {
  const host = getEnvHost();
  const url = host + '/hot-deli-bakery/api/sales/goal/list/options';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
