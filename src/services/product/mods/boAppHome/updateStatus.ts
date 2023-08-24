/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type updateStatusParam = {
  /** status */
  status: number;

  /** themeId */
  themeId: number;
};
export type updateStatusOptions = Record<string, any>;

export type updateStatusResponse = Promise<defs.product.Response>;

/**
 * @desc 更新专题状态
 */
export function request(
  params: updateStatusParam,
  options?: updateStatusOptions,
): updateStatusResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/homePage/setting/theme/updateStatus';
  const fetchOption = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    params,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
