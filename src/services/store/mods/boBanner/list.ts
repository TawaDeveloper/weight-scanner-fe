/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type listBody = defs.store.QueryBannerRequest;
export type listOptions = Record<string, any>;

export type listResponse = Promise<
  defs.store.Response<defs.store.PageInfo<defs.store.BannerDto>>
>;

/**
 * @desc 配置列表
 */
export function request(body: listBody, options?: listOptions): listResponse {
  const host = getEnvHost();
  const url = host + '/store/bo/banner/list';
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
