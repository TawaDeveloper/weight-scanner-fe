/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type downloadHandoutErrorPath = {
  /** handoutId */
  handoutId: number;
};
export type downloadHandoutErrorOptions = Record<string, any>;

export type downloadHandoutErrorResponse = Promise<any>;

/**
 * @desc 下载手动发券错误信息
 */
export function request(
  path: downloadHandoutErrorPath,
  options?: downloadHandoutErrorOptions,
): downloadHandoutErrorResponse {
  const host = getEnvHost();
  const url =
    host +
    '/promotion/bo/couponActivity/manual/handout/detail/{handoutId}'.replace(
      /\{[\w]+\}/,
      String(path.handoutId),
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
