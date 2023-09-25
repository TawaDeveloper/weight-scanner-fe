/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type updateBody = defs.store.CreateOrUpdateGroupVo;
export type updateOptions = Record<string, any>;

export type updateResponse = Promise<defs.store.Response<void>>;

/**
 * @desc 更新分组
 */
export function request(
  body: updateBody,
  options?: updateOptions,
): updateResponse {
  const host = getEnvHost();
  const url = host + '/store/bo/smsGroup/update';
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
