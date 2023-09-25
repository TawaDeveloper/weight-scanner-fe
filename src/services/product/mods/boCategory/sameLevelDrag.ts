/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type sameLevelDragBody = defs.product.Category;
export type sameLevelDragOptions = Record<string, any>;

export type sameLevelDragResponse = Promise<defs.product.Response>;

/**
 * @desc 同层拖拽
 */
export function request(
  body: sameLevelDragBody,
  options?: sameLevelDragOptions,
): sameLevelDragResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/category/sameLevelDrag';
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
