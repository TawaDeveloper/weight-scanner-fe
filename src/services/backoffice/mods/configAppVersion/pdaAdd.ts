/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type pdaAddBody = defs.backoffice.ConfigAppVersionDTO;
export type pdaAddOptions = Record<string, any>;

export type pdaAddResponse = Promise<defs.backoffice.Response<number>>;

/**
 * @desc 新增pda版本
 */
export function request(
  body: pdaAddBody,
  options?: pdaAddOptions,
): pdaAddResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/bo/config/pda/version';
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
