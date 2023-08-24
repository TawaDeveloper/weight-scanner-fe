/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type listParam = {
  /** account */
  account?: string;

  /** end */
  end?: string;

  /** page */
  page?: number;

  /** size */
  size?: number;

  /** start */
  start?: string;
};
export type listOptions = Record<string, any>;

export type listResponse = Promise<
  defs.backoffice.Response<defs.backoffice.IPage<defs.backoffice.ChangeLogDO>>
>;

/**
 * @desc changlog列表
 */
export function request(
  params: listParam,
  options?: listOptions,
): listResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/bo/changlog/list';
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
