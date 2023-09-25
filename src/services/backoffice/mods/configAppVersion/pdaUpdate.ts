/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type pdaUpdateBody = defs.backoffice.EditConfigAppVersionDTO;
export type pdaUpdateOptions = Record<string, any>;

export type pdaUpdateResponse = Promise<defs.backoffice.Response<boolean>>;

/**
 * @desc 编辑pda版本
 */
export function request(
  body: pdaUpdateBody,
  options?: pdaUpdateOptions,
): pdaUpdateResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/bo/config/pda/version';
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
