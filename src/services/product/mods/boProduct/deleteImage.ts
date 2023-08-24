/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type deleteImageParam = {
  /** id */
  id: number;
};
export type deleteImageOptions = Record<string, any>;

export type deleteImageResponse = Promise<defs.product.Response>;

/**
 * @desc 删除主图
 */
export function request(
  params: deleteImageParam,
  options?: deleteImageOptions,
): deleteImageResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/product/image/delete';
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
