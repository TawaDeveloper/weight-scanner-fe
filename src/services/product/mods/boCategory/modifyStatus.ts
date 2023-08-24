/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type modifyStatusParam = {
  /** categoryId */
  categoryId: string;

  /** status */
  status: number;
};
export type modifyStatusOptions = Record<string, any>;

export type modifyStatusResponse = Promise<defs.product.Response<boolean>>;

/**
 * @desc 修改后台类目状态
 */
export function request(
  params: modifyStatusParam,
  options?: modifyStatusOptions,
): modifyStatusResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/category/detail/modifyStatus';
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
