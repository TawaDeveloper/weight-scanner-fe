/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type generatorCreditMemoFileJobBody = string;
export type generatorCreditMemoFileJobOptions = Record<string, any>;

export type generatorCreditMemoFileJobResponse = Promise<
  defs.finance.Response<boolean>
>;

/**
 * @desc 生成 CreditMemoFile Job
 */
export function request(
  body: generatorCreditMemoFileJobBody,
  options?: generatorCreditMemoFileJobOptions,
): generatorCreditMemoFileJobResponse {
  const host = getEnvHost();
  const url = host + '/finance/bo/util/exec/generatorCreditMemoFileJob';
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
