/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type updateDefaultMemberBenefitsBody =
  defs.account.DefaultMemberBenefitsCommandDTO;
export type updateDefaultMemberBenefitsPath = {
  /** id */
  id: number;
};
export type updateDefaultMemberBenefitsOptions = Record<string, any>;

export type updateDefaultMemberBenefitsResponse = Promise<
  defs.account.Response<string>
>;

/**
 * @desc 更新默认的会员权益
 */
export function request(
  body: updateDefaultMemberBenefitsBody,
  path: updateDefaultMemberBenefitsPath,
  options?: updateDefaultMemberBenefitsOptions,
): updateDefaultMemberBenefitsResponse {
  const host = getEnvHost();
  const url =
    host +
    '/account/bo/member/benefits/update/{id}'.replace(
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
