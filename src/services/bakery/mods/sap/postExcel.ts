/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type postExcelOptions = Record<string, any>;

export type postExcelResponse = Promise<defs.bakery.Response<boolean>>;

/**
 * @desc postExcel
 */
export function request(options?: postExcelOptions): postExcelResponse {
  const host = getEnvHost();
  const url = host + '/hot-deli-bakery/sap/post_excel';
  const fetchOption = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
