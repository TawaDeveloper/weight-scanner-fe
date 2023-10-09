/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvTawaHost } from '@/utils/request';

export type editStatusPath = {
  /** id */
  id: string;
  status: string;
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
  const host = getEnvTawaHost();
  const url =
    host +
    `/tawa-api/perm/roles/${path.id}/${path.status}`
  const fetchOption = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
