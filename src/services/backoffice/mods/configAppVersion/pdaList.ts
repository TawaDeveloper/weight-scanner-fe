/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type pdaListBody = defs.backoffice.QueryAppVersionRequest;
export type pdaListOptions = Record<string, any>;

export type pdaListResponse = Promise<
  defs.backoffice.Response<
    defs.backoffice.PageInfo<defs.backoffice.EditConfigAppVersionDTO>
  >
>;

/**
 * @desc 查询pda版本列表
 */
export function request(
  body: pdaListBody,
  options?: pdaListOptions,
): pdaListResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/bo/config/pda/version/list';
  const fetchOption = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
