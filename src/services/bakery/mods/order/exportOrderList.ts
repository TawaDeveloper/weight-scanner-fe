/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type exportOrderListBody = defs.bakery.OrderListExportDTO;
export type exportOrderListOptions = Record<string, any>;

export type exportOrderListResponse = Promise<any>;

/**
 * @desc 订单列表 - 批量导出
 */
export function request(
  body: exportOrderListBody,
  options?: exportOrderListOptions,
): exportOrderListResponse {
  const host = getEnvHost();
  const url = host + '/bakery/hot-deli-bakery/api/order/list/export';
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
