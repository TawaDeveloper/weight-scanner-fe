/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getLossFactorTreeOptions = Record<string, any>;

export type getLossFactorTreeResponse = Promise<
  defs.bakery.Response<Array<defs.bakery.LossFactorTree>>
>;

/**
 * @desc 查询
 */
export function request(
  options?: getLossFactorTreeOptions,
): getLossFactorTreeResponse {
  const host = getEnvHost();
  const url = host + '/bakery/hot-deli-bakery/api/loss/factor/tree';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
