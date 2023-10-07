/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type initializeSalesDataOptions = Record<string, any>;

export type initializeSalesDataResponse = Promise<
  defs.bakery.Response<boolean>
>;

/**
 * @desc 上传所有销售数据
 */
export function request(
  options?: initializeSalesDataOptions,
): initializeSalesDataResponse {
  const host = getEnvHost();
  const url = host + '/hot-deli-bakery/sap/post_sales_data';
  const fetchOption = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
