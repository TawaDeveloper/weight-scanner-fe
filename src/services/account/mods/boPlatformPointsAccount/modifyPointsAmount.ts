/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type modifyPointsAmountParam = {
  /** noticeUserIdSet */
  noticeUserIdSet: Array<number>;
};
export type modifyPointsAmountPath = {
  /** id */
  id: number;
};
export type modifyPointsAmountOptions = Record<string, any>;

export type modifyPointsAmountResponse = Promise<defs.account.Response<string>>;

/**
 * @desc 提交/保存提示账户
 */
export function request(
  params: modifyPointsAmountParam,
  path: modifyPointsAmountPath,
  options?: modifyPointsAmountOptions,
): modifyPointsAmountResponse {
  const host = getEnvHost();
  const url =
    host +
    '/account/bo/platform-points/account/notice-user/{id}'.replace(
      /\{[\w]+\}/,
      String(path.id),
    );
  const fetchOption = {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
    },
    params,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
