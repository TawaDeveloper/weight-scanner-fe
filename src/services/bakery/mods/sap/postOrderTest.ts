/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type postOrderTestBody = defs.bakery.SapOrderingDTO;
export type postOrderTestOptions = Record<string, any>;

export type postOrderTestResponse = Promise<ObjectMap<any, object>>;

/**
 * @desc 提交订单测试接口
 */
export function request(
  body: postOrderTestBody,
  options?: postOrderTestOptions,
): postOrderTestResponse {
  const host = getEnvHost();
  const url = host + '/bakery/hot-deli-bakery/sap/post_order';
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
