/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type editStatusBody = defs.product.EditStatusFunctionRequest;
export type editStatusOptions = Record<string, any>;

export type editStatusResponse = Promise<defs.product.Response<number>>;

/**
 * @desc 编辑状态
 */
export function request(
  body: editStatusBody,
  options?: editStatusOptions,
): editStatusResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/homePage/setting/editStatus';
  const fetchOption = {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
