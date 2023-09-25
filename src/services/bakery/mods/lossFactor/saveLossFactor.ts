/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type saveLossFactorBody = defs.bakery.SaveLossFactorDTO;
export type saveLossFactorOptions = Record<string, any>;

export type saveLossFactorResponse = Promise<defs.bakery.Response<void>>;

/**
 * @desc 保存
 */
export function request(
  body: saveLossFactorBody,
  options?: saveLossFactorOptions,
): saveLossFactorResponse {
  const host = getEnvHost();
  const url = host + '/hot-deli-bakery/api/loss/factor/save';
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
