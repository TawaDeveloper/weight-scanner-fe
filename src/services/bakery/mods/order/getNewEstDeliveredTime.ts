/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getNewEstDeliveredTimeParam = {
  /** storeId */
  storeId: string;
};
export type getNewEstDeliveredTimeOptions = Record<string, any>;

export type getNewEstDeliveredTimeResponse = Promise<
  defs.bakery.Response<string>
>;

/**
 * @desc 新建订单 - 查询预计送达时间
 */
export function request(
  params: getNewEstDeliveredTimeParam,
  options?: getNewEstDeliveredTimeOptions,
): getNewEstDeliveredTimeResponse {
  const host = getEnvHost();
  const url = host + '/bakery/hot-deli-bakery/api/order/new/estDeliveredTime';
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
