/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getNewEstDeliveredDateParam = {
  /** storeId */
  storeId: string;
};
export type getNewEstDeliveredDateOptions = Record<string, any>;

export type getNewEstDeliveredDateResponse = Promise<
  defs.bakery.Response<defs.bakery.EstDeliveredDateVO>
>;

/**
 * @desc 新建订单 - 查询预计送达时间
 */
export function request(
  params: getNewEstDeliveredDateParam,
  options?: getNewEstDeliveredDateOptions,
): getNewEstDeliveredDateResponse {
  const host = getEnvHost();
  const url = host + '/hot-deli-bakery/api/order/new/estDeliveredTime';
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
