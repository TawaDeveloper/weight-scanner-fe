/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type saveShowFieldParam = {
  /** storeProductFields */
  storeProductFields?: Array<defs.product.StoreProductField>;
};
export type saveShowFieldOptions = Record<string, any>;

export type saveShowFieldResponse = Promise<defs.product.Response<void>>;

/**
 * @desc 新建或更新显示字段
 */
export function request(
  params: saveShowFieldParam,
  options?: saveShowFieldOptions,
): saveShowFieldResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/storeProduct/saveShowFiled';
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
