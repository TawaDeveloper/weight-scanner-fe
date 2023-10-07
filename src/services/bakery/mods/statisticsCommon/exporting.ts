/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type exportingPath = {
  /** viewId */
  viewId: string;
};
export type exportingOptions = Record<string, any>;

export type exportingResponse = Promise<defs.bakery.Response<ObjectMap>>;

/**
 * @desc export
 */
export function request(
  path: exportingPath,
  options?: exportingOptions,
): exportingResponse {
  const host = getEnvHost();
  const url =
    host +
    '/hot-deli-bakery/api/statistics/category/sales/export/{viewId}'.replace(
      /\{[\w]+\}/,
      String(path.viewId),
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
