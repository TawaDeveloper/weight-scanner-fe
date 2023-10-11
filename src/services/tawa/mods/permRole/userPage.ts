/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvTawaHost } from '@/utils/request';

export type userPageBody = defs.tawa.PageRuleUserRequest;
export type userPageOptions = Record<string, any>;

export type userPageResponse = Promise<
  defs.tawa.Response<defs.tawa.PageInfo<defs.tawa.PageRuleUserResponse>>
>;

/**
 * @desc 查询关联人员
 */
export function request(
  body: userPageBody,
  options?: userPageOptions,
): userPageResponse {
  const host = getEnvTawaHost();
  const url = host + '/tawa-api/perm/roles/users';
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
