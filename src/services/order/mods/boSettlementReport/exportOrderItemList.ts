/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type exportOrderItemListBody = defs.order.ExportOrderItemListDTO;
export type exportOrderItemListOptions = Record<string, any>;

export type exportOrderItemListResponse = Promise<any>;

/**
 * @desc 订单商品明细 - 筛选导出
 */
export function request(
  body: exportOrderItemListBody,
  options?: exportOrderItemListOptions,
): exportOrderItemListResponse {
  const host = getEnvHost();
  const url = host + '/order/bo/settlement/report/order/item/list/export';
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
