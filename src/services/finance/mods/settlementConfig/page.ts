/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type pageParam = {
  /** pageNum */
  pageNum?: number;

  /** pageSize */
  pageSize?: number;
};
export type pageOptions = Record<string, any>;

export type pageResponse = Promise<
  defs.finance.Response<
    defs.finance.PageInfo<defs.finance.SettlementAccountCfgDto>
  >
>;

/**
 * @desc 结算账户列表查询
 */
export function request(
  params: pageParam,
  options?: pageOptions,
): pageResponse {
  const host = getEnvHost();
  const url = host + '/finance/bo/settlementCfg/account/list';
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
