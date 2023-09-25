/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type configMemberBenefitsBody = Array<defs.account.MemberBenefitsDTO>;
export type configMemberBenefitsPath = {
  /** id */
  id: number;
};
export type configMemberBenefitsOptions = Record<string, any>;

export type configMemberBenefitsResponse = Promise<
  defs.account.Response<string>
>;

/**
 * @desc 配置会员等级对应的会员权益
 */
export function request(
  body: configMemberBenefitsBody,
  path: configMemberBenefitsPath,
  options?: configMemberBenefitsOptions,
): configMemberBenefitsResponse {
  const host = getEnvHost();
  const url =
    host +
    '/account/bo/member/level/config/benefits/{id}'.replace(
      /\{[\w]+\}/,
      String(path.id),
    );
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
