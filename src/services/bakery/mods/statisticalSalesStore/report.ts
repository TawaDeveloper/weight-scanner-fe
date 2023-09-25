/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type reportParam = {
  /** articleNumbers */
  articleNumbers?: Array<string>;

  /** department */
  department: string;

  /** storeIds */
  storeIds?: Array<string>;
};
export type reportOptions = Record<string, any>;

export type reportResponse = Promise<
  defs.bakery.Response<defs.bakery.StatisticalSalesStoreReport>
>;

/**
       * @desc 销量 & 销售额报表
销量 & 销售额报表
       */
export function request(
  params: reportParam,
  options?: reportOptions,
): reportResponse {
  const host = getEnvHost();
  const url =
    host + '/hot-deli-bakery/api/statistical/sales/store/report';
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
