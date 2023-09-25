/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type generatorSalesFileJobBody = string;
export type generatorSalesFileJobOptions = Record<string, any>;

export type generatorSalesFileJobResponse = Promise<
  defs.finance.Response<boolean>
>;

/**
 * @desc 生成 SalesFile Job
 */
export function request(
  body: generatorSalesFileJobBody,
  options?: generatorSalesFileJobOptions,
): generatorSalesFileJobResponse {
  const host = getEnvHost();
  const url = host + '/finance/bo/util/exec/generatorSalesFileJob';
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
