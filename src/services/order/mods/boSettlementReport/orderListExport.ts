/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type orderListExportBody = any;
export type orderListExportOptions = Record<string, any>;

export type orderListExportResponse = Promise<any>;

/**
 * @desc 订单报表导出Excel
 */
export function request(
  body: orderListExportBody,
  options?: orderListExportOptions,
): orderListExportResponse {
  const host = getEnvHost();
  const url = host + '/order/bo/settlement/report/order/export';
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
