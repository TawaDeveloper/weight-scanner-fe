/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type createBody = defs.store.CreateOrUpdateGroupVo;
export type createOptions = Record<string, any>;

export type createResponse = Promise<defs.store.Response<void>>;

/**
 * @desc 新增分组
 */
export function request(
  body: createBody,
  options?: createOptions,
): createResponse {
  const host = getEnvHost();
  const url = host + '/store/bo/smsGroup/create';
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
