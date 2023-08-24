/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type checkDeleteParam = {
  /** id */
  id: number;
};
export type checkDeleteOptions = Record<string, any>;

export type checkDeleteResponse = Promise<defs.backoffice.Response>;

/**
 * @desc 判断能否删除部门
 */
export function request(
  params: checkDeleteParam,
  options?: checkDeleteOptions,
): checkDeleteResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/bo/department/delete/check';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    params,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
