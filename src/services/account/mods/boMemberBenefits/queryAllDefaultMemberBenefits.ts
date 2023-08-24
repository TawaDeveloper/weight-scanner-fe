/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type queryAllDefaultMemberBenefitsOptions = Record<string, any>;

export type queryAllDefaultMemberBenefitsResponse = Promise<
  defs.account.Response<Array<defs.account.DefaultMemberBenefitsVO>>
>;

/**
 * @desc 查询所有的默认的会员权益
 */
export function request(
  options?: queryAllDefaultMemberBenefitsOptions,
): queryAllDefaultMemberBenefitsResponse {
  const host = getEnvHost();
  const url = host + '/account/bo/member/benefits/list';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
