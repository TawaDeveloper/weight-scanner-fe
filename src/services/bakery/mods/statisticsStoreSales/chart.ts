/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type chartParam = {
  /** articleNumbers */
  articleNumbers?: Array<string>;

  /** compareSamePeriod */
  compareSamePeriod?: boolean;

  /** department */
  department: string;

  /** endDate */
  endDate: number;

  /** startDate */
  startDate: number;

  /** storeIds */
  storeIds?: Array<string>;

  /** viewBy */
  viewBy: string;
};
export type chartOptions = Record<string, any>;

export type chartResponse = Promise<
  defs.bakery.Response<Array<any>>
>;

/**
       * @desc 销售量 & 销售额图表
销售量 & 销售额图表
       */
export function request(
  params: chartParam,
  options?: chartOptions,
): chartResponse {
  const host = getEnvHost();
  const url = host + '/bakery/hot-deli-bakery/api/statistics/store/sales/chart';
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
