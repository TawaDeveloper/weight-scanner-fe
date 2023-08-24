/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type createOrEditBody = defs.store.BannerDto;
export type createOrEditOptions = Record<string, any>;

export type createOrEditResponse = Promise<defs.store.Response>;

/**
 * @desc 新增或编辑
 */
export function request(
  body: createOrEditBody,
  options?: createOrEditOptions,
): createOrEditResponse {
  const host = getEnvHost();
  const url = host + '/store/bo/banner/createOrEdit';
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
