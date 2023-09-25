/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getLackListPageBody = defs.order.BoOrderLackListDTO;
export type getLackListPageOptions = Record<string, any>;

export type getLackListPageResponse = Promise<
  defs.order.Response<defs.order.PageInfo<defs.order.BoOrderLackListItem>>
>;

/**
 * @desc 缺货管理 - 查询缺货列表
 */
export function request(
  body: getLackListPageBody,
  options?: getLackListPageOptions,
): getLackListPageResponse {
  const host = getEnvHost();
  const url = host + '/order/bo/order/lack/list/page';
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
