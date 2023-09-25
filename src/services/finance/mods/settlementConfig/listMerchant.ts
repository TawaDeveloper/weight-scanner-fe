/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type listMerchantOptions = Record<string, any>;

export type listMerchantResponse = Promise<
  defs.finance.Response<Array<defs.finance.Merchant>>
>;

/**
 * @desc 商家列表(下拉)
 */
export function request(options?: listMerchantOptions): listMerchantResponse {
  const host = getEnvHost();
  const url = host + '/finance/bo/settlementCfg/merchant/list';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
