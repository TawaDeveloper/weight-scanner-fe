/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getRefundListPageBody = defs.order.RefundListPageDTO;
export type getRefundListPageOptions = Record<string, any>;

export type getRefundListPageResponse = Promise<
  defs.order.Response<defs.order.PageInfo<defs.order.RefundListItem>>
>;

/**
 * @desc 售后明细 - 分页查询
 */
export function request(
  body: getRefundListPageBody,
  options?: getRefundListPageOptions,
): getRefundListPageResponse {
  const host = getEnvHost();
  const url = host + '/order/bo/settlement/report/refund/list/page';
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
