/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type orderItemListExportBody = any;
export type orderItemListExportOptions = Record<string, any>;

export type orderItemListExportResponse = Promise<any>;

/**
 * @desc 订单明细导出Excel
 */
export function request(
  body: orderItemListExportBody,
  options?: orderItemListExportOptions,
): orderItemListExportResponse {
  const host = getEnvHost();
  const url = host + '/order/bo/settlement/report/order/item/export';
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
