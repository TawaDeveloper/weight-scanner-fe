/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getUserSimpleParam = {
  /** phone */
  phone?: string;

  /** userId */
  userId?: number;
};
export type getUserSimpleOptions = Record<string, any>;

export type getUserSimpleResponse = Promise<
  defs.account.Response<defs.account.UserSimpleVO>
>;

/**
 * @desc 查询用户简要信息
 */
export function request(
  params: getUserSimpleParam,
  options?: getUserSimpleOptions,
): getUserSimpleResponse {
  const host = getEnvHost();
  const url = host + '/account/bo/user/simple';
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
