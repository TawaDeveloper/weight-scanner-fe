/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type downloadInventoryOptions = Record<string, any>;

export type downloadInventoryResponse = Promise<any>;

/**
       * @desc 下载商品库存模板
下载导入模板，后续上传文件时应该以这个模板为基础
       */
export function request(
  options?: downloadInventoryOptions,
): downloadInventoryResponse {
  const host = getEnvHost();
  const url = host + '/warehouse/bo/inventory/download/inventory';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
