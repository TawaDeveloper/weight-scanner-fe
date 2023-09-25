/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getExcelOptions = Record<string, any>;

export type getExcelResponse = Promise<ObjectMap<any, object>>;

/**
 * @desc getExcel
 */
export function request(options?: getExcelOptions): getExcelResponse {
  const host = getEnvHost();
  const url = host + '/bakery/hot-deli-bakery/sap/get_excel';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
