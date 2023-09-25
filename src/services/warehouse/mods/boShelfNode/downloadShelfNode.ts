/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type downloadShelfNodeOptions = Record<string, any>;

export type downloadShelfNodeResponse = Promise<any>;

/**
       * @desc 下载货架模板
下载 CSV 格式的导入模板，后续上传文件时应该以这个模板为基础
       */
export function request(
  options?: downloadShelfNodeOptions,
): downloadShelfNodeResponse {
  const host = getEnvHost();
  const url = host + '/warehouse/bo/shelfNode/download/shelfNode';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
