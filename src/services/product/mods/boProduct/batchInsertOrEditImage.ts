/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type batchInsertOrEditImageBody = Array<defs.product.ProductImage>;
export type batchInsertOrEditImageOptions = Record<string, any>;

export type batchInsertOrEditImageResponse = Promise<defs.product.Response>;

/**
 * @desc 批量插入或更新主图
 */
export function request(
  body: batchInsertOrEditImageBody,
  options?: batchInsertOrEditImageOptions,
): batchInsertOrEditImageResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/product/image/batchInsertOrEdit';
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
