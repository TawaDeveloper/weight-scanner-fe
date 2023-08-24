/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type putOpenOrCloseByIdPath = {
  /** id */
  id: number;
};
export type putOpenOrCloseByIdOptions = Record<string, any>;

export type putOpenOrCloseByIdResponse = Promise<defs.promotion.Response<void>>;

/**
 * @desc 上架或下架活动商品
 */
export function request(
  path: putOpenOrCloseByIdPath,
  options?: putOpenOrCloseByIdOptions,
): putOpenOrCloseByIdResponse {
  const host = getEnvHost();
  const url =
    host +
    '/promotion/bo/saleProduct/openOrClose/{id}'.replace(
      /\{[\w]+\}/,
      String(path.id),
    );
  const fetchOption = {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
