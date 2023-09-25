/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type batchExportOrdersBody = defs.order.BoOrderListExportDTO;
export type batchExportOrdersOptions = Record<string, any>;

export type batchExportOrdersResponse = Promise<any>;

/**
 * @desc 订单列表 - 批量导出
 */
export function request(
  body: batchExportOrdersBody,
  options?: batchExportOrdersOptions,
): batchExportOrdersResponse {
  const host = getEnvHost();
  const url = host + '/order/bo/order/list/batch/export';
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
