/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type listParam = {
  /** article */
  article?: string;

  /** page */
  page?: number;

  /** productName */
  productName?: string;

  /** promotionType */
  promotionType: number;

  /** size */
  size?: number;

  /** status */
  status?: number;
};
export type listOptions = Record<string, any>;

export type listResponse = Promise<
  defs.promotion.Response<defs.promotion.IPage<defs.promotion.BigSaleProductVo>>
>;

/**
 * @desc 查询活动商品列表
 */
export function request(
  params: listParam,
  options?: listOptions,
): listResponse {
  const host = getEnvHost();
  const url = host + '/promotion/bo/saleProduct/list';
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
