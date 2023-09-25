/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getSalesGoalForPageBody = defs.bakery.SalesGoalListDTO;
export type getSalesGoalForPageOptions = Record<string, any>;

export type getSalesGoalForPageResponse = Promise<
  defs.bakery.Response<defs.bakery.IPage<defs.bakery.SalesGoalListItem>>
>;

/**
 * @desc 分页查询
 */
export function request(
  body: getSalesGoalForPageBody,
  options?: getSalesGoalForPageOptions,
): getSalesGoalForPageResponse {
  const host = getEnvHost();
  const url = host + '/hot-deli-bakery/api/sales/goal/list/page';
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
