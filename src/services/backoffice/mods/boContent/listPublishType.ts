/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type listPublishTypeOptions = Record<string, any>;

export type listPublishTypeResponse = Promise<
  defs.backoffice.Response<Array<defs.backoffice.DictionaryVO>>
>;

/**
 * @desc 查询内容发布类型列表
 */
export function request(
  options?: listPublishTypeOptions,
): listPublishTypeResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/bo/content/publish-type/list';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
