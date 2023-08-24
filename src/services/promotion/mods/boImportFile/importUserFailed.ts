/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type importUserFailedParam = {
  /** batchId */
  batchId: string;
};
export type importUserFailedOptions = Record<string, any>;

export type importUserFailedResponse = Promise<any>;

/**
       * @desc 下载错误的用户信息
下载错误的用户信息，用于手动发券上传用户信息
       */
export function request(
  params: importUserFailedParam,
  options?: importUserFailedOptions,
): importUserFailedResponse {
  const host = getEnvHost();
  const url = host + '/promotion/bo/import/file/import/user/failed';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    params,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
