/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type matchParam = {
  /** exact */
  exact?: boolean;

  /** keyword */
  keyword?: string;

  /** page */
  page?: number;

  /** size */
  size?: number;
};
export type matchOptions = Record<string, any>;

export type matchResponse = Promise<
  defs.promotion.Response<defs.promotion.IPage<defs.promotion.BigSaleProductVo>>
>;

/**
 * @desc 查询活动商品列表
 */
export function request(
  params: matchParam,
  options?: matchOptions,
): matchResponse {
  const host = getEnvHost();
  const url = host + '/promotion/bo/saleProduct/match';
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
