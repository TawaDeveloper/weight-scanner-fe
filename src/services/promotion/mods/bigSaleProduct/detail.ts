/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type detailPath = {
  /** id */
  id: number;
};
export type detailOptions = Record<string, any>;

export type detailResponse = Promise<
  defs.promotion.Response<defs.promotion.BigSaleProductDetailVo>
>;

/**
 * @desc 查询直降活动商品详情
 */
export function request(
  path: detailPath,
  options?: detailOptions,
): detailResponse {
  const host = getEnvHost();
  const url =
    host +
    '/promotion/bo/saleProduct/detail/{id}'.replace(
      /\{[\w]+\}/,
      String(path.id),
    );
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
