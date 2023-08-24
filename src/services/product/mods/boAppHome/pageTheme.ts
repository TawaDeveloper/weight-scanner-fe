/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type pageThemeBody = defs.product.QueryThemeRequest;
export type pageThemeOptions = Record<string, any>;

export type pageThemeResponse = Promise<
  defs.product.Response<defs.product.PageInfo<defs.product.Theme>>
>;

/**
 * @desc 分页查询专题列表
 */
export function request(
  body: pageThemeBody,
  options?: pageThemeOptions,
): pageThemeResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/homePage/setting/theme/list';
  const fetchOption = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
