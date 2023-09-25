/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type importProductFailedParam = {
  /** batchId */
  batchId: string;
};
export type importProductFailedOptions = Record<string, any>;

export type importProductFailedResponse = Promise<any>;

/**
       * @desc 下载错误的商品信息
下载错误的商品信息，用于上传活动商品
       */
export function request(
  params: importProductFailedParam,
  options?: importProductFailedOptions,
): importProductFailedResponse {
  const host = getEnvHost();
  const url = host + '/promotion/bo/import/file/import/product/failed';
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
