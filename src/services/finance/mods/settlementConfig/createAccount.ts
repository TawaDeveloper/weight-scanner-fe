/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type createAccountBody = defs.finance.SettlementAccountCfgDto;
export type createAccountOptions = Record<string, any>;

export type createAccountResponse = Promise<defs.finance.Response<number>>;

/**
 * @desc 账号创建
 */
export function request(
  body: createAccountBody,
  options?: createAccountOptions,
): createAccountResponse {
  const host = getEnvHost();
  const url = host + '/finance/bo/settlementCfg/account/create';
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
