/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type deleteThemeParam = {
  /** themeId */
  themeId: number;
};
export type deleteThemeOptions = Record<string, any>;

export type deleteThemeResponse = Promise<defs.product.Response>;

/**
 * @desc 删除专题
 */
export function request(
  params: deleteThemeParam,
  options?: deleteThemeOptions,
): deleteThemeResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/homePage/setting/theme/delete';
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
