/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type createBody = defs.warehouse.BoCreateTruckBasketVo;
export type createOptions = Record<string, any>;

export type createResponse = Promise<defs.warehouse.Response<void>>;

/**
 * @desc 新增拣货车或者篮子
 */
export function request(
  body: createBody,
  options?: createOptions,
): createResponse {
  const host = getEnvHost();
  const url = host + '/warehouse/bo/truckBasket/create';
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
