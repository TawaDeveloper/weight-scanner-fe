/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type modifyStatusBody = defs.store.UpdateBannerRequest;
export type modifyStatusOptions = Record<string, any>;

export type modifyStatusResponse = Promise<defs.store.Response>;

/**
 * @desc 修改状态
 */
export function request(
  body: modifyStatusBody,
  options?: modifyStatusOptions,
): modifyStatusResponse {
  const host = getEnvHost();
  const url = host + '/store/bo/banner/modifyStatus';
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
