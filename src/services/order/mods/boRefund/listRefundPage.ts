/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type listRefundPageBody = defs.order.BoListRefundPageDTO;
export type listRefundPageOptions = Record<string, any>;

export type listRefundPageResponse = Promise<
  defs.order.Response<defs.order.PageInfo<defs.order.BoListRefundItem>>
>;

/**
 * @desc 分页查询售后列表
 */
export function request(
  body: listRefundPageBody,
  options?: listRefundPageOptions,
): listRefundPageResponse {
  const host = getEnvHost();
  const url = host + '/order/bo/refund/list/page/query';
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
