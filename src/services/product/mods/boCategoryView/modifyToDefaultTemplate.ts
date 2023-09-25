/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type modifyToDefaultTemplateParam = {
  /** deliveryLabel */
  deliveryLabel: number;

  /** templateId */
  templateId: number;
};
export type modifyToDefaultTemplateOptions = Record<string, any>;

export type modifyToDefaultTemplateResponse = Promise<defs.product.Response>;

/**
 * @desc 将当前模板设为默认模板
 */
export function request(
  params: modifyToDefaultTemplateParam,
  options?: modifyToDefaultTemplateOptions,
): modifyToDefaultTemplateResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/categoryView/template/default';
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
