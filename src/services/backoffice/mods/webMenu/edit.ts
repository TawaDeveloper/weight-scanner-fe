/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type editBody = defs.backoffice.MenuDto;
export type editOptions = Record<string, any>;

export type editResponse = Promise<defs.backoffice.Response<number>>;

/**
 * @desc 编辑菜单
 */
export function request(body: editBody, options?: editOptions): editResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/bo/menu';
  const fetchOption = {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
