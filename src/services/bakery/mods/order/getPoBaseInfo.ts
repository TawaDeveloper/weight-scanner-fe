/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getPoBaseInfoParam = {
  /** orderId */
  orderId: string;

  /** po */
  po: string;
};
export type getPoBaseInfoOptions = Record<string, any>;

export type getPoBaseInfoResponse = Promise<
  defs.bakery.Response<defs.bakery.PoDetailBaseVO>
>;

/**
 * @desc PO 单详情 - 查询基础信息
 */
export function request(
  params: getPoBaseInfoParam,
  options?: getPoBaseInfoOptions,
): getPoBaseInfoResponse {
  const host = getEnvHost();
  const url = host + '/hot-deli-bakery/api/order/po/detail/base';
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
