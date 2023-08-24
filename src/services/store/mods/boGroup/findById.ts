/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type findByIdPath = {
  /** id */
  id: number;
};
export type findByIdOptions = Record<string, any>;

export type findByIdResponse = Promise<
  defs.store.Response<defs.store.BoGroupVo>
>;

/**
 * @desc 根据 ID 查询分组
 */
export function request(
  path: findByIdPath,
  options?: findByIdOptions,
): findByIdResponse {
  const host = getEnvHost();
  const url =
    host + '/store/bo/smsGroup/{id}'.replace(/\{[\w]+\}/, String(path.id));
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
