/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type delPath = {
  /** id */
  id: number;
};
export type delOptions = Record<string, any>;

export type delResponse = Promise<defs.product.Response>;

/**
 * @desc 删除菜单
 */
export function request(path: delPath, options?: delOptions): delResponse {
  const host = getEnvHost();
  const url =
    host +
    '/product/bo/homePage/setting/{id}'.replace(/\{[\w]+\}/, String(path.id));
  const fetchOption = {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
