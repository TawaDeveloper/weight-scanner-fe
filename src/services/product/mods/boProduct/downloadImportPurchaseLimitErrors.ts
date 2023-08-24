/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type downloadImportPurchaseLimitErrorsPath = {
  /** fileId */
  fileId: number;
};
export type downloadImportPurchaseLimitErrorsOptions = Record<string, any>;

export type downloadImportPurchaseLimitErrorsResponse = Promise<any>;

/**
 * @desc 下载商品导入错误数据
 */
export function request(
  path: downloadImportPurchaseLimitErrorsPath,
  options?: downloadImportPurchaseLimitErrorsOptions,
): downloadImportPurchaseLimitErrorsResponse {
  const host = getEnvHost();
  const url =
    host +
    '/product/bo/product/purchaseLimit/failed/download/{fileId}'.replace(
      /\{[\w]+\}/,
      String(path.fileId),
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
