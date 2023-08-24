/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type downloadShelfLocationOptions = Record<string, any>;

export type downloadShelfLocationResponse = Promise<any>;

/**
       * @desc 下载存货位模板
下载 CSV 格式的导入模板，后续上传文件时应该以这个模板为基础
       */
export function request(
  options?: downloadShelfLocationOptions,
): downloadShelfLocationResponse {
  const host = getEnvHost();
  const url = host + '/warehouse/bo/shelfNode/download/shelfLocation';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
