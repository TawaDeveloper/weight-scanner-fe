/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type allListMerchantOptions = Record<string, any>;

export type allListMerchantResponse = Promise<
  defs.finance.Response<Array<defs.finance.Merchant>>
>;

/**
 * @desc 全部商家列表
 */
export function request(
  options?: allListMerchantOptions,
): allListMerchantResponse {
  const host = getEnvHost();
  const url = host + '/finance/bo/settlementCfg/merchant/allList';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
