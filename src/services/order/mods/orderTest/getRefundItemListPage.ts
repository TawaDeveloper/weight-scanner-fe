/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getRefundItemListPageBody = defs.order.RefundItemListPageDTO;
export type getRefundItemListPageOptions = Record<string, any>;

export type getRefundItemListPageResponse = Promise<
  defs.order.Response<defs.order.PageInfo<defs.order.RefundItemListItem>>
>;

/**
 * @desc 售后商品明细 - 分页查询
 */
export function request(
  body: getRefundItemListPageBody,
  options?: getRefundItemListPageOptions,
): getRefundItemListPageResponse {
  const host = getEnvHost();
  const url = host + '/order/test/refund/item/list/page';
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
