/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type delPath = {
  /** id */
  id: number;
};
export type delOptions = Record<string, any>;

export type delResponse = Promise<defs.backoffice.Response>;

/**
 * @desc 删除菜单
 */
export function request(path: delPath, options?: delOptions): delResponse {
  const host = getEnvHost();
  const url =
    host + '/backoffice/bo/menu/{id}'.replace(/\{[\w]+\}/, String(path.id));
  const fetchOption = {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
