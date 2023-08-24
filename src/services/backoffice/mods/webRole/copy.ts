/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type copyPath = {
  /** roleId */
  roleId: number;
};
export type copyOptions = Record<string, any>;

export type copyResponse = Promise<defs.backoffice.Response>;

/**
 * @desc 复制角色
 */
export function request(path: copyPath, options?: copyOptions): copyResponse {
  const host = getEnvHost();
  const url =
    host +
    '/backoffice/bo/role/assign/{roleId}/copy'.replace(
      /\{[\w]+\}/,
      String(path.roleId),
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
