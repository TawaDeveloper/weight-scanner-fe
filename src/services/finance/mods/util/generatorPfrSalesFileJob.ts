/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type generatorPfrSalesFileJobBody = string;
export type generatorPfrSalesFileJobOptions = Record<string, any>;

export type generatorPfrSalesFileJobResponse = Promise<
  defs.finance.Response<boolean>
>;

/**
 * @desc 生成 PfrSalesFile Job
 */
export function request(
  body: generatorPfrSalesFileJobBody,
  options?: generatorPfrSalesFileJobOptions,
): generatorPfrSalesFileJobResponse {
  const host = getEnvHost();
  const url = host + '/finance/bo/util/exec/generatorPfrSalesFileJob';
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
