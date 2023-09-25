/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type checkPhoneBody = defs.backoffice.ValidDTO;
export type checkPhoneOptions = Record<string, any>;

export type checkPhoneResponse = Promise<defs.backoffice.Response>;

/**
 * @desc checkPhone
 */
export function request(
  body: checkPhoneBody,
  options?: checkPhoneOptions,
): checkPhoneResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/test/valid';
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
