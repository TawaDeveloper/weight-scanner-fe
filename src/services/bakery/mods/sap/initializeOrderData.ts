/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type initializeOrderDataOptions = Record<string, any>;

export type initializeOrderDataResponse = Promise<
  defs.bakery.Response<boolean>
>;

/**
 * @desc 上传所有訂單相關数据
 */
export function request(
  options?: initializeOrderDataOptions,
): initializeOrderDataResponse {
  const host = getEnvHost();
  const url = host + '/hot-deli-bakery/sap/initialize_database';
  const fetchOption = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
