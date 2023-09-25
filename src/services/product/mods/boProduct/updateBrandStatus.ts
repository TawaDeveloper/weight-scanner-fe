/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type updateBrandStatusParam = {
  /** brandId */
  brandId: number;

  /** status */
  status: number;
};
export type updateBrandStatusOptions = Record<string, any>;

export type updateBrandStatusResponse = Promise<defs.product.Response>;

/**
 * @desc 更新品牌状态
 */
export function request(
  params: updateBrandStatusParam,
  options?: updateBrandStatusOptions,
): updateBrandStatusResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/product/brand/updateStatus';
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
