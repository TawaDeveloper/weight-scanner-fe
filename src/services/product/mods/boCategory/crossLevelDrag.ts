/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type crossLevelDragBody = defs.product.DragCategory;
export type crossLevelDragOptions = Record<string, any>;

export type crossLevelDragResponse = Promise<defs.product.Response>;

/**
 * @desc 跨层拖拽
 */
export function request(
  body: crossLevelDragBody,
  options?: crossLevelDragOptions,
): crossLevelDragResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/category/crossLevelDrag';
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
