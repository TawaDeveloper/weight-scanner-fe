/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type templateProductOptions = Record<string, any>;

export type templateProductResponse = Promise<any>;

/**
       * @desc 下载商品模板
下载用户模板，用于上传活动商品
       */
export function request(
  options?: templateProductOptions,
): templateProductResponse {
  const host = getEnvHost();
  const url = host + '/promotion/bo/import/file/template/product';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
