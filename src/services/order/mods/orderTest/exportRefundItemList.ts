/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type exportRefundItemListBody = defs.order.RefundItemListExportDTO;
export type exportRefundItemListOptions = Record<string, any>;

export type exportRefundItemListResponse = Promise<any>;

/**
 * @desc 售后商品明细 - 筛选导出
 */
export function request(
  body: exportRefundItemListBody,
  options?: exportRefundItemListOptions,
): exportRefundItemListResponse {
  const host = getEnvHost();
  const url = host + '/order/test/refund/item/list/export';
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
