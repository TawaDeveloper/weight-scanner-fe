/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type listParam = {
  /** pageNum */
  pageNum?: number;

  /** pageSize */
  pageSize?: number;

  /** storeId */
  storeId?: number;

  /** storeName */
  storeName?: string;
};
export type listOptions = Record<string, any>;

export type listResponse = Promise<
  defs.store.Response<defs.store.IPage<defs.store.BoStoreIntroductionVo>>
>;

/**
 * @desc 查询门店介绍
 */
export function request(
  params: listParam,
  options?: listOptions,
): listResponse {
  const host = getEnvHost();
  const url = host + '/store/bo/store/introduction/list';
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
