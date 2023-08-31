/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getNewOptionsOptions = Record<string, any>;

export type getNewOptionsResponse = Promise<
  defs.bakery.Response<defs.bakery.OrderNewOptionsVO>
>;

/**
 * @desc 新建订单 - 查询条件选项
 */
export function request(options?: getNewOptionsOptions): getNewOptionsResponse {
  const host = getEnvHost();
  const url = host + '/bakery/hot-deli-bakery/order/new/options';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
