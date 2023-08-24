/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type updateAccountBody = defs.finance.SettlementAccountCfgDto;
export type updateAccountOptions = Record<string, any>;

export type updateAccountResponse = Promise<defs.finance.Response<void>>;

/**
 * @desc 账号更新
 */
export function request(
  body: updateAccountBody,
  options?: updateAccountOptions,
): updateAccountResponse {
  const host = getEnvHost();
  const url = host + '/finance/bo/settlementCfg/account/update';
  const fetchOption = {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
