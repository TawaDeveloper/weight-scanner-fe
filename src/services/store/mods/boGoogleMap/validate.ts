/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type validateParam = {
  /** address */
  address: string;
};
export type validateOptions = Record<string, any>;

export type validateResponse = Promise<
  defs.store.Response<defs.store.BoGoogleMapValidateVo>
>;

/**
 * @desc 校验地址
 */
export function request(
  params: validateParam,
  options?: validateOptions,
): validateResponse {
  const host = getEnvHost();
  const url = host + '/store/bo/google/map/validate';
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
