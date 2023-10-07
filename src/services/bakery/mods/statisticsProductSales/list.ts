/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type listParam = {
  /** categories */
  categories?: Array<string>;

  /** compareSamePeriod */
  compareSamePeriod?: boolean;

  /** departmentId */
  departmentId: number;

  /** endDate */
  endDate: string;

  /** productIds */
  productIds?: Array<number>;

  /** rememberMe */
  rememberMe?: boolean;

  /** startDate */
  startDate: string;

  /** storeIds */
  storeIds?: Array<number>;

  /** storeNames */
  storeNames?: Array<string>;

  /** viewBy */
  viewBy: string;
};
export type listOptions = Record<string, any>;

export type listResponse = Promise<defs.bakery.Response<ObjectMap>>;

/**
 * @desc list
 */
export function request(
  params: listParam,
  options?: listOptions,
): listResponse {
  const host = getEnvHost();
  const url =
    host + '/hot-deli-bakery/api/statistics/product/sales/list';
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
