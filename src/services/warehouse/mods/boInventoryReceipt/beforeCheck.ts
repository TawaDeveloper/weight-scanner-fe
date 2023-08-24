/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type beforeCheckParam = {
  /** category */
  category: number;

  /** count */
  count: number;

  /** nodeName */
  nodeName: string;

  /** productId */
  productId: number;

  /** wmsId */
  wmsId: number;
};
export type beforeCheckOptions = Record<string, any>;

export type beforeCheckResponse = Promise<defs.warehouse.Response<void>>;

/**
 * @desc 新建出入库单之前的检查
 */
export function request(
  params: beforeCheckParam,
  options?: beforeCheckOptions,
): beforeCheckResponse {
  const host = getEnvHost();
  const url = host + '/warehouse/bo/inventoryReceipt/beforeCheck';
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
