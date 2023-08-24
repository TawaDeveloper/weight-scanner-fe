/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type pageBody = defs.finance.QuerySettlementOrderRequest;
export type pageOptions = Record<string, any>;

export type pageResponse = Promise<
  defs.finance.Response<
    defs.finance.PageInfo<defs.finance.QuerySettlementOrderResponse>
  >
>;

/**
 * @desc 列表查询
 */
export function request(body: pageBody, options?: pageOptions): pageResponse {
  const host = getEnvHost();
  const url = host + '/finance/bo/settlementOrders';
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
