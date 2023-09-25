/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type listParam = {
  /** nameNo */
  nameNo?: string;

  /** page */
  page?: number;

  /** size */
  size?: number;

  /** status */
  status?: number;

  /** type */
  type?: number;

  /** wmsId */
  wmsId?: number;
};
export type listOptions = Record<string, any>;

export type listResponse = Promise<
  defs.warehouse.Response<defs.warehouse.IPage<defs.warehouse.BoTruckBasketVo>>
>;

/**
       * @desc 拣货车或者篮子列表
查询拣货车或篮子列表
       */
export function request(
  params: listParam,
  options?: listOptions,
): listResponse {
  const host = getEnvHost();
  const url = host + '/warehouse/bo/truckBasket/list';
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
