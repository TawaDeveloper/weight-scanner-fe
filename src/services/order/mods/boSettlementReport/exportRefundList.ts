/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type exportRefundListBody = defs.order.RefundListExportDTO;
export type exportRefundListOptions = Record<string, any>;

export type exportRefundListResponse = Promise<any>;

/**
 * @desc 售后明细 - 筛选导出
 */
export function request(
  body: exportRefundListBody,
  options?: exportRefundListOptions,
): exportRefundListResponse {
  const host = getEnvHost();
  const url = host + '/order/bo/settlement/report/refund/list/export';
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
