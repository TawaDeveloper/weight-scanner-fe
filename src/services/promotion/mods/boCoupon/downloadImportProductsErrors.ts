/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type downloadImportProductsErrorsPath = {
  /** logId */
  logId: number;
};
export type downloadImportProductsErrorsOptions = Record<string, any>;

export type downloadImportProductsErrorsResponse = Promise<any>;

/**
 * @desc 下载商品导入错误数据
 */
export function request(
  path: downloadImportProductsErrorsPath,
  options?: downloadImportProductsErrorsOptions,
): downloadImportProductsErrorsResponse {
  const host = getEnvHost();
  const url =
    host +
    '/promotion/bo/couponActivity/detail/product/uploadError/{logId}'.replace(
      /\{[\w]+\}/,
      String(path.logId),
    );
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
