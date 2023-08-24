/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type listStatusOptions = Record<string, any>;

export type listStatusResponse = Promise<
  defs.backoffice.Response<Array<defs.backoffice.DictionaryVO>>
>;

/**
 * @desc 查询内容状态列表
 */
export function request(options?: listStatusOptions): listStatusResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/bo/content/status/list';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
