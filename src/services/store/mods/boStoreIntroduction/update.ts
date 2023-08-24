/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type updateBody = defs.store.BoStoreIntroductionVo;
export type updateOptions = Record<string, any>;

export type updateResponse = Promise<defs.store.Response<void>>;

/**
 * @desc 修改门店介绍
 */
export function request(
  body: updateBody,
  options?: updateOptions,
): updateResponse {
  const host = getEnvHost();
  const url = host + '/store/bo/store/introduction/update';
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
