/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type listMemberBenefitsPath = {
  /** id */
  id: number;
};
export type listMemberBenefitsOptions = Record<string, any>;

export type listMemberBenefitsResponse = Promise<
  defs.account.Response<Array<defs.account.MemberBenefitsVO>>
>;

/**
 * @desc 查询会员等级对应的会员权益
 */
export function request(
  path: listMemberBenefitsPath,
  options?: listMemberBenefitsOptions,
): listMemberBenefitsResponse {
  const host = getEnvHost();
  const url =
    host +
    '/account/bo/member/level/list/benefits/{id}'.replace(
      /\{[\w]+\}/,
      String(path.id),
    );
  const fetchOption = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
