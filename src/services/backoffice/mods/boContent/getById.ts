/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getByIdPath = {
  /** id */
  id: number;
};
export type getByIdOptions = Record<string, any>;

export type getByIdResponse = Promise<
  defs.backoffice.Response<defs.backoffice.ContentFullVO>
>;

/**
 * @desc 查询内容明细
 */
export function request(
  path: getByIdPath,
  options?: getByIdOptions,
): getByIdResponse {
  const host = getEnvHost();
  const url =
    host + '/backoffice/bo/content/{id}'.replace(/\{[\w]+\}/, String(path.id));
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
