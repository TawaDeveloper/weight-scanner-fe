/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getUserProfilePath = {
  /** inviteCode */
  inviteCode: string;
};
export type getUserProfileOptions = Record<string, any>;

export type getUserProfileResponse = Promise<
  defs.account.Response<defs.account.UserSimpleProfileVO>
>;

/**
 * @desc 根据邀请码查询邀请人昵称头像
 */
export function request(
  path: getUserProfilePath,
  options?: getUserProfileOptions,
): getUserProfileResponse {
  const host = getEnvHost();
  const url =
    host +
    '/account/h5/permission/profile/{inviteCode}'.replace(
      /\{[\w]+\}/,
      String(path.inviteCode),
    );
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
