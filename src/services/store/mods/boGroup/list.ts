/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type listParam = {
  /** name */
  name?: string;

  /** page */
  page?: number;

  /** size */
  size?: number;

  /** status */
  status?: number;

  /** type */
  type?: number;
};
export type listOptions = Record<string, any>;

export type listResponse = Promise<
  defs.store.Response<defs.store.IPage<defs.store.BoGroupVo>>
>;

/**
 * @desc 查询分组列表
 */
export function request(
  params: listParam,
  options?: listOptions,
): listResponse {
  const host = getEnvHost();
  const url = host + '/store/bo/smsGroup/list';
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
