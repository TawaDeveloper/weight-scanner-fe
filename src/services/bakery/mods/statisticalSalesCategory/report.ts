/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type reportParam = {
  /** categories */
  categories?: Array<string>;

  /** department */
  department: string;

  /** storeIds */
  storeIds?: Array<string>;

  /** storeNames */
  storeNames?: Array<string>;
};
export type reportOptions = Record<string, any>;

export type reportResponse = Promise<
  defs.bakery.Response<defs.bakery.StatisticalSalesCategoryReport>
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
    host + '/hot-deli-bakery/api/statistical/sales/category/report';
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
