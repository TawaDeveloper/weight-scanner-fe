/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type editStatusBody = defs.order.EditStatusRequest;
export type editStatusOptions = Record<string, any>;

export type editStatusResponse = Promise<defs.order.Response<boolean>>;

/**
 * @desc 编辑状态
 */
export function request(
  body: editStatusBody,
  options?: editStatusOptions,
): editStatusResponse {
  const host = getEnvHost();
  const url = host + '/order/bo/recipe/editStatus';
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
