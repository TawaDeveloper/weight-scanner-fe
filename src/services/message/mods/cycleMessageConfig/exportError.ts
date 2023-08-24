/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type exportErrorPath = {
  /** requestErrorId */
  requestErrorId: string;
};
export type exportErrorOptions = Record<string, any>;

export type exportErrorResponse = Promise<any>;

/**
 * @desc 导出含有错误信息的Excel表格
 */
export function request(
  path: exportErrorPath,
  options?: exportErrorOptions,
): exportErrorResponse {
  const host = getEnvHost();
  const url =
    host +
    '/message/bo/cycleMessage/export/error/{requestErrorId}'.replace(
      /\{[\w]+\}/,
      String(path.requestErrorId),
    );
  const fetchOption = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
