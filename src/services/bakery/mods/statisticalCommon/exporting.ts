/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type exportingPath = {
  /** module */
  module: string;
  reportId: string;
};
export type exportingOptions = Record<string, any>;

export type exportingResponse = Promise<any>;

/**
       * @desc 销量 & 销售额报表导出
销量 & 销售额报表导出
       */
export function request(
  path: exportingPath,
  options?: exportingOptions,
): exportingResponse {
  const host = getEnvHost();
  const url =
    host +
    `/hot-deli-bakery/api/statistical/common/export/${path.module}/${path.reportId}`;
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
