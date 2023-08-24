/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type listParam = {
  /** code */
  code?: string;

  /** discountCategory */
  discountCategory?: string;

  /** id */
  id?: number;

  /** name */
  name?: string;

  /** page */
  page?: number;

  /** size */
  size?: number;

  /** status */
  status?: string;
};
export type listOptions = Record<string, any>;

export type listResponse = Promise<
  defs.promotion.Response<
    defs.promotion.IPage<defs.promotion.ActivityDiscountCodeVo>
  >
>;

/**
 * @desc 活动列表
 */
export function request(
  params: listParam,
  options?: listOptions,
): listResponse {
  const host = getEnvHost();
  const url = host + '/promotion/bo/discountCode/config/list';
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
