/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type editStatusPath = {
  /** id */
  id: string;
};
export type editStatusOptions = Record<string, any>;

export type editStatusResponse = Promise<defs.tawa.Response<boolean>>;

/**
 * @desc 编辑状态
 */
export function request(
  path: editStatusPath,
  options?: editStatusOptions,
): editStatusResponse {
  const host = getEnvHost();
  const url =
    host +
    '/tawa/perm/roles/{id}/{status}'.replace(/\{[\w]+\}/, String(path.id));
  const fetchOption = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
