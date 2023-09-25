/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type exportingBody = defs.finance.QueryPaymentRequest;
export type exportingOptions = Record<string, any>;

export type exportingResponse = Promise<any>;

/**
 * @desc 导出Excel
 */
export function request(
  body: exportingBody,
  options?: exportingOptions,
): exportingResponse {
  const host = getEnvHost();
  const url = host + '/finance/bo/payment/export';
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
