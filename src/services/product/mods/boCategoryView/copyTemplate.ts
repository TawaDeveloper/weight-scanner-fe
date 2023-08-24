/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type copyTemplateParam = {
  /** coverageArea */
  coverageArea?: Array<string>;

  /** defaultStatus */
  defaultStatus?: number;

  /** deliveryLabel */
  deliveryLabel?: number;

  /** id */
  id?: number;

  /** name */
  name?: string;

  /** status */
  status?: number;

  /** storeGroup */
  storeGroup?: string;
};
export type copyTemplateOptions = Record<string, any>;

export type copyTemplateResponse = Promise<defs.product.Response>;

/**
 * @desc 复制前台分类模板
 */
export function request(
  params: copyTemplateParam,
  options?: copyTemplateOptions,
): copyTemplateResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/categoryView/template/copy';
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
