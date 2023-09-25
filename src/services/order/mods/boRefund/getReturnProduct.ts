/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getReturnProductParam = {
  /** subRefundId */
  subRefundId: string;
};
export type getReturnProductOptions = Record<string, any>;

export type getReturnProductResponse = Promise<
  defs.order.Response<defs.order.ReturnProductVO>
>;

/**
 * @desc 退货入库 - 查询商品信息
 */
export function request(
  params: getReturnProductParam,
  options?: getReturnProductOptions,
): getReturnProductResponse {
  const host = getEnvHost();
  const url = host + '/order/bo/refund/return/product';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    params,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
