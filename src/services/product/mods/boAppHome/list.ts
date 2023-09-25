/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type listBody = defs.product.QueryFunctionRequest;
export type listOptions = Record<string, any>;

export type listResponse = Promise<
  defs.product.Response<defs.product.PageInfo<defs.product.FunctionDto>>
>;

/**
 * @desc 配置列表
 */
export function request(body: listBody, options?: listOptions): listResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/homePage/setting/list';
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
