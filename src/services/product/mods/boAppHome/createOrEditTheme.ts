/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type createOrEditThemeBody = defs.product.Theme;
export type createOrEditThemeOptions = Record<string, any>;

export type createOrEditThemeResponse = Promise<defs.product.Response>;

/**
 * @desc 新建/编辑专题
 */
export function request(
  body: createOrEditThemeBody,
  options?: createOrEditThemeOptions,
): createOrEditThemeResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/homePage/setting/theme/createOrEdit';
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
