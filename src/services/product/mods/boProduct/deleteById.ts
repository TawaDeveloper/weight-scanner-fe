/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type deleteByIdParam = {
  /** id */
  id: number;
};
export type deleteByIdOptions = Record<string, any>;

export type deleteByIdResponse = Promise<defs.product.Response>;

/**
 * @desc 删除声明
 */
export function request(
  params: deleteByIdParam,
  options?: deleteByIdOptions,
): deleteByIdResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/product/policy/delete';
  const fetchOption = {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
    },
    params,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
